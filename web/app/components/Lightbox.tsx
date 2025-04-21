'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export interface LightboxImage {
  id: string;
  src: string;
  thumbnail: string;
  alt?: string;
}

interface LightboxProps {
  images: LightboxImage[];
}

export function Lightbox({ images }: LightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const prevImage = () =>
    setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () =>
    setIndex(i => (i === images.length - 1 ? 0 : i + 1));

  // Arrow keys + Escape, inlined so no missing deps
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setIndex(i => (i === 0 ? images.length - 1 : i - 1));
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        setIndex(i => (i === images.length - 1 ? 0 : i + 1));
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, images.length]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          <button
            onClick={e => { e.stopPropagation(); prevImage(); }}
            className="hidden md:block absolute left-10 text-white text-4xl p-2 cursor-pointer z-40"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={images[index].src}
              alt={images[index].alt || ''}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={e => { e.stopPropagation(); nextImage(); }}
            className="hidden md:block absolute right-10 text-white text-4xl p-2 cursor-pointer z-40"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <div
            key={img.id}
            className="cursor-pointer overflow-hidden group"
            onClick={() => { setIndex(i); setOpen(true); }}
          >
            <Image
              src={img.thumbnail}
              alt={img.alt || ''}
              width={400}
              height={300}
              className="transform group-hover:scale-105 transition"
            />
          </div>
        ))}
      </div>
    </>
  );
}
