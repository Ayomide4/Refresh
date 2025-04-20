// lib/sanity-gallery.ts

import createClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImage } from '../types';

/**
 * Sanity client configured for your project.
 * - useCdn: true for fast, cached reads in production
 * - apiVersion: pin to a date so your queries don’t break unexpectedly
 */
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2025-04-13',
});
/**
 * image-url builder to generate optimized image URLs.
 */
const builder = imageUrlBuilder(client);

/**
 * urlFor
 * @param source  – a SanityImage (asset reference) from your gallery schema
 * @returns       – a builder you can chain (.width(), .auto(), etc.) before calling .url()
 */
export function urlFor(source: SanityImage) {
  return builder.image(source);
}

/**
 * getGalleryImageUrls
 * - Fetch the first `gallery` document’s images
 * - Return an array of fully built, optimized URLs
 * - Returns an empty array if no gallery exists, no images, or on error
 */
export async function getGalleryImageUrls(): Promise<string[]> {
  try {
    // GROQ: pull only the `asset` refs from the `images` array
    const res = await client.fetch<{
      images?: { _ref: string }[]
    }>(
      `*[_type == "gallery"][0]{
         "images": images[].asset
       }`
    );

    console.log(res)
    // If there’s no images field or it’s empty, bail out
    if (!res?.images?.length) {
      return [];
    }

    // Build optimized URLs for each image asset
    return res.images
      .map(asset => {
        return urlFor(asset)
          .width(800)       // cap width at 800px
          .auto('format')   // serve WebP/AVIF when possible
          .url();
      })
      .filter((u): u is string => Boolean(u)); // drop any null/undefined
  } catch (err) {
    // Log and return empty so UI can show fallback state
    console.error('[getGalleryImageUrls] Sanity fetch error:', err);
    return [];
  }
}
