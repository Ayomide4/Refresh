
// components/Gallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const columns = 4;        // images per row
  const rows = 2;           // number of rows to show
  const pageSize = columns * rows; // total images per page

  const [page, setPage] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const maxPage = Math.ceil(images.length / pageSize) - 1;

  const openModal = (src: string) => {
    setModalImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  // slice out the images for the current page
  const start = page * pageSize;
  const displayImages = images.slice(start, start + pageSize);

  return (
    <div>
      {/* Gallery Grid */}
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {displayImages.map((src, idx) => (
            <div
              key={start + idx}
              className="relative w-full h-48 cursor-pointer"
              onClick={() => openModal(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${start + idx + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50"
        >
          ◀
        </button>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, maxPage))}
          disabled={page === maxPage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50"
        >
          ▶
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage}
              alt="Modal image"
              width={800}
              height={600}
              className="object-contain rounded"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

