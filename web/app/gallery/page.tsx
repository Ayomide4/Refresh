
// app/gallery/page.tsx
import fs from "fs";
import path from "path";
import Gallery from "../components/Gallery"

export const metadata = {
  title: "Gallery – Refresh",
};

export default async function GalleryPage() {
  // 1. Read all image files from public/about
  const aboutDir = path.join(process.cwd(), "public", "about");
  const files = fs
    .readdirSync(aboutDir)
    .filter((name) => /\.(jpe?g|png|gif|webp|avif)$/i.test(name))
    .map((name) => `/about/${name}`); // turn into public URL

  return (
    <main className="min-h-screen px-6 py-12 text-black">
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 mt-20">
        Our Gallery
      </h1>
      <p className="text-center text-lg md:text-xl mb-12">
        Browse highlights from our recent events.
      </p>

      {/* pass the dynamic list of images */}
      <Gallery images={files} />
    </main>
  );
}
