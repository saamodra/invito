import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="relative -mx-6 mt-4 overflow-hidden bg-[#1A1A1A] sm:-mx-14">
      <Image
        src="/photos/pdp-31.jpg"
        alt="Sabrang dan Yeni berpose sebagai pasangan"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      <div className="relative mx-auto flex min-h-[600px] sm:min-h-[700px] max-w-3xl flex-col items-center justify-end gap-4 px-8 pb-14 text-center text-white">
        <p className="font-script text-4xl sm:text-5xl">Sabrang &amp; Yeni</p>
        <p className="text-sm text-white/90 sm:text-base">
          Suatu kebahagiaan &amp; kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa
          dan restu kepada kami.
        </p>
        <p className="text-xs uppercase tracking-[0.4em] text-[#D4A857]">Terima kasih</p>
      </div>
    </footer>
  );
}
