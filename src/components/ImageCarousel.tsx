import React, { useMemo, useRef, useEffect, useState } from "react";

interface ImageCarouselProps {
  images: string[]; // Array of image URLs
  direction?: "left" | "right"; // Scroll direction (default "left")
  duration?: number; // Animation duration in seconds (default 40)
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  direction = "left",
  duration = 40,
}) => {
  // Ensure images is defined.
  const safeImages = images || [];

  // Duplicate images to create a seamless loop.
  const duplicatedImages = useMemo(
    () => [...safeImages, ...safeImages],
    [safeImages],
  );
  const finalImages = useMemo(() => {
    return direction === "right"
      ? [...duplicatedImages].reverse()
      : duplicatedImages;
  }, [duplicatedImages, direction]);

  // Reference to the container to measure its width.
  const carouselRef = useRef<HTMLDivElement>(null);
  const [halfWidth, setHalfWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      // Since the content is duplicated, one copy's width is half.
      setHalfWidth(totalWidth / 2);
    }
  }, [finalImages]);

  // Build the row of images.
  const carouselRow = useMemo(() => {
    return finalImages.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`carousel-image-${index}`}
        style={{
          width: "500px",
          height: "300px",
          objectFit: "cover",
        }}
        className="mx-2 flex-shrink-0 rounded-2xl"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "fallback-image.png";
        }}
      />
    ));
  }, [finalImages]);

  return (
    <div className="overflow-hidden mb-5 -mx-10">
      <div
        ref={carouselRef}
        className={`flex ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={
          {
            animationDuration: `${duration}s`,
            // Set a CSS variable with the measured half-width.
            "--half-width": `${halfWidth}px`,
          } as React.CSSProperties
        }
      >
        {carouselRow}
      </div>
    </div>
  );
};

export default ImageCarousel;
