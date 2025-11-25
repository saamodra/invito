import Image from "next/image";

type HeroSectionProps = {
  invitedName: string;
};

export default function HeroSection({ invitedName }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden px-6 py-16 text-center text-white sm:py-20">
      <Image
        src="/Sabrang-Yeni/pdp-5.jpg"
        alt="Sabrang dan Yeni"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 520px"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80" />
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2 pt-4">
          <p className="text-sm uppercase tracking-[0.5em] text-white/80">The Wedding of</p>
          <h1 className="font-script text-5xl text-white">Sabrang &amp; Yeni</h1>
        </div>
      </div>

      <div className="absolute bottom-1 w-full max-w-sm space-y-4 px-4 pb-8">
        <div className="w-full rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-white backdrop-blur">
          <p className="text-sm">Kepada Yth.</p>
          <p className="text-xl font-semibold">{invitedName}</p>
        </div>
        <a
          href="#invitation-content"
          className="cursor-pointer font-ui inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4A301F] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#D4A857] shadow-lg shadow-black/40 transition hover:bg-[#1A1A1A]"
        >
          Buka Undangan
        </a>
      </div>
    </section>
  );
}
