// lib/sanity-gallery.ts

import createClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImage } from '../types'

/**
 * Sanity client configured for your project.
 */
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,
  apiVersion: '2025-04-13',
})

/**
 * image-url builder to generate optimized image URLs.
 */
const builder = imageUrlBuilder(client)

/**
 * urlFor
 * @param source – a SanityImage (full image object) from your gallery schema
 */
export function urlFor(source: SanityImage) {
  return builder.image(source)
}

/**
 * getGalleryImageUrls
 * - Fetch the first `gallery` document’s full image objects
 * - Return an array of fully built, optimized URLs
 */
export async function getGalleryImageUrls(): Promise<string[]> {
  try {
    const res = await client.fetch<{ images?: SanityImage[] }>(
      `*[_type == "gallery"][0]{
         "images": images[]{ _type, asset }
       }`
    )

    if (!res.images?.length) {
      return []
    }

    return res.images
      .map(image =>
        urlFor(image)
          .width(800)      // cap width at 800px
          .auto('format')  // serve WebP/AVIF when possible
          .url()
      )
      .filter((url): url is string => Boolean(url))
  } catch (err) {
    console.error('[getGalleryImageUrls] Sanity fetch error:', err)
    return []
  }
}
