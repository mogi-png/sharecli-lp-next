// Mock for next/image — used only by design-sync bundling (not the Next.js app)
import React from 'react';

type ImageProps = {
  src: string | { src: string };
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
};

export default function Image({ src, alt, fill, className, style, width, height }: ImageProps) {
  const imgSrc = typeof src === 'string' ? src : (src as { src: string })?.src ?? '';
  const fillStyle: React.CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
    : {};
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      style={{ ...fillStyle, ...style }}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
    />
  );
}
