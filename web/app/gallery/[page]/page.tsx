import { urlFor, sanity } from "@/app/lib/sanity";
import { galleryQuery } from "@/app/lib/queries";
import { Lightbox, LightboxImage } from "@/app/components/Lightbox";
import Link from "next/link";

interface SanityGalleryImage {
  _id: string
  alt?: string
  image: { asset: { _ref: string } }
}

const PAGE_SIZE = 8 //amount of images per page

export async function generateStaticParams(): Promise<{ page: string }[]> {
  const all = await sanity.fetch<SanityGalleryImage[]>(galleryQuery)
  const pageCount = Math.ceil(all.length / PAGE_SIZE)
  return Array.from({ length: pageCount }, (_, i) => ({
    page: String(i + 1),
  }))
}

async function GalleryPage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page: pageStr } = await params
  const page = Number(pageStr) || 1

  const all = await sanity.fetch<SanityGalleryImage[]>(galleryQuery)
  const start = (page - 1) * PAGE_SIZE
  const images = all.slice(start, start + PAGE_SIZE)
  const totalPages = Math.ceil(all.length / PAGE_SIZE)

  const galleryImages: LightboxImage[] = images.map(img => ({
    id: img._id,
    src: urlFor(img.image).width(1600).auto('format').fit('max').url(),
    thumbnail: urlFor(img.image).width(600).height(500).auto('format').fit('max').url(),
    alt: img.alt || '',
  }))

  return (
    <div className="px-4 py-8 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 mt-24 text-white">
        Gallery — Page {page}
      </h1>
      <Lightbox images={galleryImages} />
      <nav className="flex justify-center items-center space-x-4 mt-8 text-white">
        {page > 1 && (
          <Link href={`/gallery/${page - 1}`} className="underline hover:text-gray-700">
            ← Prev
          </Link>
        )}
        <span>Page {page} of {totalPages}</span>
        {page < totalPages && (
          <Link href={`/gallery/${page + 1}`} className="underline hover:text-gray-700">
            Next →
          </Link>
        )}
      </nav>
    </div>
  )
}

export default GalleryPage
