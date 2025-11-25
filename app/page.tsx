import Image from "next/image";
import CoupleSection from "./components/CoupleSection";
import CountdownSection from "./components/CountdownSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import GiftSection from "./components/GiftSection";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import WishesSection from "./components/WishesSection";
import {
  couple,
  events,
  galleryImages,
  locations,
  weddingGifts,
  weddingTimestamp,
} from "./invitationData";

type HomeProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
};

const fallbackName = "Tamu Istimewa";

const getInvitedName = (rawParam?: string | string[] | null): string => {
  if (!rawParam) return fallbackName;
  const raw = Array.isArray(rawParam) ? rawParam[0] : rawParam;
  try {
    return decodeURIComponent(raw).replace(/\+/g, " ").trim() || fallbackName;
  } catch {
    return raw.replace(/\+/g, " ").trim() || fallbackName;
  }
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await Promise.resolve(searchParams ?? {});
  const invitedName = getInvitedName(params.to ?? null);

  return (
    <div className="relative min-h-screen bg-[#1A1A1A] text-[#2B2B2B] scroll-smooth">
      <div className="relative md:flex">
        <div className="relative hidden md:flex fixed inset-y-0 left-0 md:w-full items-center justify-center overflow-hidden bg-[#1A1A1A]">
          <Image
            src="/bg-front.png"
            alt="Sabrang dan Yeni"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
          <div className="relative z-10 flex max-w-lg flex-col items-center gap-3 px-8 text-center text-white">
            <p className="text-md uppercase tracking-[0.5em] text-white/80 mb-6">The Wedding of</p>
            <h2 className="font-script text-7xl text-white mb-6">Sabrang &amp; Yeni</h2>
            <p className="text-lg text-white/80">08 Februari 2026</p>
          </div>
        </div>

        <div className="relative w-full md:w-[50vw] md:max-w-lg md:h-screen md:overflow-y-auto">
          <div className="relative min-h-screen overflow-hidden bg-[#f1efef] text-[#2B2B2B]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,168,87,0.2),transparent_60%),linear-gradient(120deg,#f1efef_0%,#d9d4cf_45%,#f1efef_100%)] opacity-90" />
            <div className="absolute inset-y-0 left-1/2 w-[160%] -translate-x-1/2 rotate-6 bg-[url('/file.svg')] bg-[length:320px] bg-center opacity-10" />

            <HeroSection invitedName={invitedName} />
            <IntroSection />

            <main className="font-playfair relative mx-auto flex min-h-screen w-full max-w-md flex-col gap-12 px-6 pt-14 pb-0 text-base leading-relaxed text-[#2B2B2B]">
              <CoupleSection couple={couple} />
              <CountdownSection
                events={events}
                location={locations.main}
                weddingTimestamp={weddingTimestamp}
              />
              <GiftSection weddingGifts={weddingGifts} />
              <GallerySection galleryImages={galleryImages} />
              <WishesSection invitedName={invitedName} />
              <FooterSection />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
