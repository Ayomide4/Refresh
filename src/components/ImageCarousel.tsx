import React, { useMemo } from "react";

interface ImageCarouselProps {
  images: string[]; // Array of image URLs
  direction?: "left" | "right"; // Optional: direction to scroll (default is "left")
  duration?: number; // Optional: duration of the animation in seconds (default is 30)
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  direction = "left",
  duration = 40,
}) => {
  // Ensure images is defined, defaulting to an empty array if not.
  const safeImages = images || [];

  // Duplicate the images array to create a seamless loop.
  const duplicatedImages = useMemo(
    () => [...safeImages, ...safeImages],
    [safeImages],
  );

  const finalImages = useMemo(() => {
    if (direction === "right") {
      const reversed = [...duplicatedImages].reverse();
      // Rotate: remove the last element and add it to the front.
      return reversed;
    } else {
      return duplicatedImages;
    }
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
        className="mx-2 flex-shrink-0 rounded-2xl" // Adds horizontal margin between images
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
    <div className="overflow-hidden mb-5 -mx-10">
      <div
        className={`  flex ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={animationStyle}
      >
        {carouselRow}
      </div>
    </div>
  );
};

export default ImageCarousel;
