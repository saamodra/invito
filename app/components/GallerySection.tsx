import Image from "next/image";
import { GalleryImage } from "../invitationData";

type GallerySectionProps = {
  galleryImages: GalleryImage[];
};

export default function GallerySection({ galleryImages }: GallerySectionProps) {
  return (
    <>
      <section className="text-center space-y-3">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-[#C57B8B]">Galeri</p>
        <h2 className="text-3xl font-semibold text-[#1A1A1A]">Our Gallery</h2>
        <div className="mx-auto flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#D4A857]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#4A301F]" />
          <span className="h-px w-10 bg-[#D4A857]" />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className={`relative h-64 overflow-hidden border border-[#D9D4CF] bg-[#F1EFEF] shadow-lg shadow-[#1A1A1A]/10`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index === 0}
            />
          </div>
        ))}
      </section>
    </>
  );
}
