import React from 'react';

interface ImageSkeletonProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  rounded?: boolean;
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({
  className = '',
  width = '100%',
  height = '100%',
  rounded = false,
}) => {
  return (
    <div
      className={`bg-gray-200 animate-pulse ${rounded ? 'rounded-2xl' : ''} ${className}`}
      style={{
        width,
        height,
      }}
    />
  );
};

export default ImageSkeleton; 