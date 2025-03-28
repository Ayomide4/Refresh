import React, { useMemo } from "react";

interface ImageCarouselProps {
  images: string[]; // Array of image URLs
  direction?: "left" | "right"; // Optional: direction to scroll (default is "left")
  duration?: number; // Optional: duration of the animation in seconds (default is 30)
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  direction = "left",
  duration = 5,
}) => {
  // Ensure images is defined, defaulting to an empty array if not.
  const safeImages = images || [];

  // Duplicate the images array to create a seamless loop.
  const duplicatedImages = useMemo(() => [...safeImages, ...safeImages], [safeImages]);

  // For rightward scrolling, reverse the duplicated images array.
  const finalImages = useMemo(() => {
    return direction === "right" ? [...duplicatedImages].reverse() : duplicatedImages;
  }, [duplicatedImages, direction]);

  // Build the row of images from the final array.
  const carouselRow = useMemo(() => {
    return finalImages.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`carousel-image-${index}`}
        style={{
          // Use fixed width for all images here; adjust if you want alternating widths
          width: "500px",
          height: "300px", // Fixed height for consistency
          objectFit: "cover", // Ensures images cover the area without distortion
        }}
        className="mx-2 flex-shrink-0" // Adds horizontal margin between images
        // Error handling: if the image fails to load, swap the src to a fallback image.
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "fallback-image.png";
        }}
      />
    ));
  }, [finalImages]);

  // Inline style to set the animation duration dynamically.
  const animationStyle = {
    animationDuration: `${duration}s`,
  };

  return (
    <div className="overflow-hidden">
      <div
        className={`w-[1000px]  flex ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={animationStyle}
      >
        {carouselRow}
      </div>
    </div>
  );
};

export default ImageCarousel;
