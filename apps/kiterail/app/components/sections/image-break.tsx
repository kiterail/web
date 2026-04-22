import Image from "next/image";

type ImageBreakProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function ImageBreak({ src, alt, caption }: ImageBreakProps) {
  return (
    <div className="relative h-[480px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover brightness-[0.92] saturate-75 sepia-[6%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(96.5%_0.012_88)]/12 to-[oklch(96.5%_0.012_88)]/35" />
      {caption && (
        <p className="absolute bottom-8 right-16 font-[family-name:var(--font-heading)] text-lg italic text-white/90">
          {caption}
        </p>
      )}
    </div>
  );
}
