import Image from "next/image";

export default function IntroSection() {
  return (
    <section id="invitation-content" className="relative w-full bg-[#2b1c14] px-6 py-14 sm:py-16">
      <div className="absolute inset-0 bg-[url('/file.svg')] bg-[length:220px] bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2b1c14] via-[#2b1c14]/94 to-[#2b1c14]" />

      <div className="relative mx-auto flex w-full max-w-md flex-col items-center gap-0 text-center text-white">
        <div className="relative w-full overflow-hidden rounded-t-2xl bg-[#0f0a07]/80 shadow-[0_18px_45px_rgba(0,0,0,0.4)]">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/photos/pdp-1.jpg"
              alt="Sabrang dan Yeni"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 520px"
              priority
            />
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-b-2xl bg-white/92 shadow-[0_14px_35px_rgba(0,0,0,0.28)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,168,87,0.16),_transparent_60%)] opacity-70" />
          <div className="absolute inset-0 bg-[url('/file.svg')] bg-[length:260px] bg-center opacity-10" />
          <div className="relative flex h-full flex-col items-center gap-4 px-6 py-8 text-center text-[#2B2B2B] sm:px-8">
            <p className="font-script text-2xl font-semibold tracking-[0.35em] text-[#4A301F]">S &amp; Y</p>
            <blockquote className="text-sm leading-relaxed italic">
              “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu
              dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
              antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
              tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
            </blockquote>
            <p className="text-sm font-semibold text-[#4A301F]">QS. Ar-Rum : 21</p>
          </div>
        </div>
      </div>
    </section>
  );
}
