// app/gallery/page.tsx

import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { getGalleryImageUrls } from "../lib/sanityGallery";

export const metadata = {
  title: "Gallery – Refresh",
};

// Revalidate every 60 seconds so new uploads in Sanity show up quickly
export const revalidate = 60;

export default async function GalleryPage() {
  // Fetch optimized URLs for all gallery images
  const images = await getGalleryImageUrls();
  console.log(images)

  return (
    <main className="min-h-screen px-6 py-12 text-white bg-gray-500">
      {/* Page header */}
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 mt-20">
        Our Gallery
      </h1>
      <p className="text-center text-lg md:text-xl mb-12">
        Browse highlights from our recent events.
      </p>

      {/* If no images, show a fallback message */}
      {images.length === 0 ? (
        <p className="text-center text-yellow-200">
          No images available. Please add images in Sanity Studio.
        </p>
      ) : (
        <Gallery images={images} />
      )}

      <Footer />
    </main>
  );
}
