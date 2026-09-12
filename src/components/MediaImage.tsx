import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "quality"> & {
  quality?: number;
};

/**
 * Shared next/image defaults: modern formats via next.config,
 * sensible quality, lazy unless priority.
 */
export default function MediaImage({
  quality = 75,
  sizes = "(max-width: 768px) 100vw, 50vw",
  alt,
  ...props
}: Props) {
  return (
    <Image
      alt={alt}
      quality={quality}
      sizes={sizes}
      {...props}
    />
  );
}
