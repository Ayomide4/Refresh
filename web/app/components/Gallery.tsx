"use client";

import Image from "next/image";
import { useState } from "react";

import { ChevronRight, ChevronLeft, X } from "lucide-react";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const columns = 3;        // images per row
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
      <div className="relative h-[calc(4rem*2+2rem)] md:h-[calc((100vw/3)*(3/4)*2+2rem)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ">
          {displayImages.map((src, idx) => (
            <div
              key={start + idx}

              className="relative w-full aspect-[4/3]  cursor-pointer rounded-lg overflow-hidden"

              onClick={() => openModal(src)}
            >
              <Image
                src={src}
                alt={`Gallery image ${start + idx + 1}`}
                fill
                className="object-cover rounded-lg "
              />
            </div>
          ))}
        </div>

        {/* Prev / Next Buttons */}
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50"
        >
          <ChevronLeft className="text-black" />
        </button>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, maxPage))}
          disabled={page === maxPage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-50"
        >
          <ChevronRight className="text-black" />        </button>
      </div>

      {/* Modal */}
      {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-[90vw] max-w-5xl aspect-[4/3] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImage}
              alt="Modal image"
              fill
              className="object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black cursor-pointer p-2 rounded z-10"
            >
              <X />            </button>
          </div>
        </div>
      )}    </div>
  );
}

