"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaGift, FaEyeSlash, FaWhatsapp } from "react-icons/fa";

const locations = {
  main: {
    name: "Dukuh Purwoasri RT.01 RW.01",
    address: "Desa Karanggebang Jetis Ponorogo",
    mapsUrl: "https://maps.app.goo.gl/cgBFmjzK15mceWkYA",
  },
};

const events = [
  {
    title: "Akad Nikah",
    date: "Sabtu, 8 Februari 2026",
    time: "08.00 WIB - Selesai",
    location: "main",
  },
  {
    title: "Resepsi Nikah",
    date: "Minggu, 8 Februari 2026",
    time: "13.00 - Selesai",
    location: "main",
  },
];

const galleryImages = [
  { src: "/Sabrang-Yeni/pdp-12.jpg", alt: "Sabrang dan Yeni dalam sesi prewedding" },
  { src: "/Sabrang-Yeni/pdp-25.jpg", alt: "Pasangan Sabrang dan Yeni berpose anggun" },
  { src: "/Sabrang-Yeni/pdp-42.jpg", alt: "Potret kehangatan Sabrang dan Yeni" },
];

const weddingGifts = [
  { bank: "Mandiri", name: "Sabrang Prasetyo", number: "1710003532994" },
  { bank: "BRI", name: "Yeni Kurnia Sari", number: "649301029544535" },
];

const couple = [
  {
    label: "The Groom",
    name: "Sabrang Prasetyo",
    parents: ["Putra dari Bapak Purnomo", "dan Ibu Supini"],
    image: "/Sabrang-Yeni/pdp-68.jpg",
  },
  {
    label: "The Bride",
    name: "Yeni Kurnia Sari",
    parents: ["Putri dari Bapak Sukadi", "dan Almh. Ibu Sunarmi"],
    image: "/Sabrang-Yeni/pdp-62.jpg",
  },
];

const weddingTimestamp = new Date(2026, 1, 8, 8, 0, 0, 0);

const getTimeLeft = () => {
  const now = Date.now();
  const distance = Math.max(weddingTimestamp.getTime() - now, 0);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default function Home() {
  const searchParams = useSearchParams();
  const [isOpened, setIsOpened] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);
  const contentRef = useRef<HTMLElement | null>(null);
  const [showGifts, setShowGifts] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [transferTo, setTransferTo] = useState(weddingGifts[0]?.number ?? "");

  const invitedName = useMemo(() => {
    const raw = searchParams.get("to");
    if (!raw) return "Tamu Istimewa";
    try {
      return decodeURIComponent(raw).replace(/\+/g, " ").trim() || "Tamu Istimewa";
    } catch {
      return raw.replace(/\+/g, " ").trim() || "Tamu Istimewa";
    }
  }, [searchParams]);

  useEffect(() => {
    if (!isOpened) return;

    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isOpened]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen bg-[#1A1A1A] text-[#2B2B2B]">
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
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/70" /> */}
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
                <button
                  onClick={handleOpenInvitation}
                  className="cursor-pointer font-ui inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4A301F] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#D4A857] shadow-lg shadow-black/40 transition hover:bg-[#1A1A1A]"
                >
                  Buka Undangan
                </button>
              </div>
            </section>

            <section
              ref={contentRef}
              className="relative w-full bg-[#2b1c14] px-6 py-14 sm:py-16"
            >
              <div className="absolute inset-0 bg-[url('/file.svg')] bg-[length:220px] bg-center opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#2b1c14] via-[#2b1c14]/94 to-[#2b1c14]" />

              <div className="relative mx-auto flex w-full max-w-md flex-col items-center gap-0 text-center text-white">
                <div className="relative w-full overflow-hidden rounded-t-2xl bg-[#0f0a07]/80 shadow-[0_18px_45px_rgba(0,0,0,0.4)]">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src="/Sabrang-Yeni/pdp-25.jpg"
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
                    <blockquote className="text-base leading-relaxed italic">
                      “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan
                      untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan
                      Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
                      benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
                    </blockquote>
                    <p className="text-sm font-semibold text-[#4A301F]">QS. Ar-Rum : 21</p>
                  </div>
                </div>
              </div>
            </section>

            <main className="font-playfair relative mx-auto flex min-h-screen w-full max-w-md flex-col gap-12 px-6 pt-14 pb-0 text-base leading-relaxed text-[#2B2B2B]">
              <section className="grid gap-8 border-y border-[#D9D4CF] py-12">
                {couple.map((person) => (
                  <div
                    key={person.label}
                    className="flex flex-col gap-6 border border-[#4A301F33] bg-[#d9d4cf]/80 p-6 text-center text-[#2B2B2B] shadow-[0_15px_30px_rgba(26,26,26,0.15)]"
                  >
                    <span className="font-ui text-sm uppercase tracking-[0.5em] text-[#D4A857]">
                      {person.label}
                    </span>
                    <div className="relative w-full overflow-hidden border border-[#c4b08f] bg-white shadow-lg">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={640}
                        height={960}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={person.label === "The Groom"}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="font-script text-4xl text-[#1A1A1A]">{person.name}</p>
                      {person.parents.map((parent) => (
                        <p key={parent} className="text-sm text-[#4A301F]">
                          {parent}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </section>

              <section className="rounded-2xl border border-[#D9D4CF] bg-gradient-to-b from-[#f7f4ef] to-[#e8e1d8] p-6 shadow-[0_18px_35px_rgba(26,26,26,0.12)] sm:p-10">
                <div className="text-center">
                  <p className="font-ui text-xs uppercase tracking-[0.35em] text-[#C57B8B]">Hitung Mundur</p>
                  <h2 className="mt-2 text-3xl font-semibold text-[#1A1A1A]">Menuju Hari Bahagia</h2>
                  <p className="mt-2 text-[#4A301F]">08 Februari 2026 · Ponorogo, Jawa Timur</p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[{ label: "Hari", value: timeLeft.days }, { label: "Jam", value: timeLeft.hours }, { label: "Menit", value: timeLeft.minutes }, { label: "Detik", value: timeLeft.seconds }].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[#D4A85733] bg-white/80 p-4 text-center shadow-inner shadow-[#D4A85722]"
                    >
                      <p className="text-3xl font-semibold text-[#1A1A1A]">{String(item.value).padStart(2, "0")}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#4A301F]">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-6">
                  {events.map((event) => (
                    <div
                      key={event.title}
                      className="rounded-2xl border border-[#D4A85733] bg-white/80 p-6 shadow-[0_10px_25px_rgba(26,26,26,0.08)]"
                    >
                      <p className="font-ui text-xs uppercase tracking-[0.3em] text-[#D4A857]">{event.title}</p>
                      <p className="mt-3 text-xl font-semibold text-[#1A1A1A]">{event.date}</p>
                      <p className="text-base text-[#4A301F]">{event.time}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-[#D4A85733] bg-white/90 p-6 shadow-[0_10px_25px_rgba(26,26,26,0.08)]">
                  <p className="font-ui text-xs uppercase tracking-[0.3em] text-[#D4A857]">Tempat</p>
                  <p className="mt-3 text-lg font-semibold text-[#1A1A1A]">{locations.main.name}</p>
                  <p className="text-sm text-[#4A301F]">{locations.main.address}</p>
                  {locations.main.mapsUrl && (
                    <a
                      href={locations.main.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center justify-center rounded-full bg-[#4A301F] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A857] shadow-lg shadow-[#1A1A1A]/20 transition hover:bg-[#1A1A1A]"
                    >
                      Buka Google Maps
                    </a>
                  )}
                </div>
              </section>

              <section className="rounded-2xl border border-[#C57B8B]/40 bg-gradient-to-br from-[#fdf8f4] via-[#f0e3da] to-[#e5d2c9] p-6 shadow-[0_20px_45px_rgba(26,26,26,0.15)] sm:p-12">
                <div className="text-center">
                  <p className="font-ui text-xs uppercase tracking-[0.3em] text-[#C57B8B]">Wedding Gift</p>
                  <h2 className="mt-2 text-3xl font-semibold text-[#1A1A1A]">Ungkapan Kasih</h2>
                  <p className="mt-2 text-[#4A301F]">
                    Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin berbagi kebahagiaan,
                    kami dengan senang hati menerimanya melalui:
                  </p>
                </div>
                <div className="mt-6 flex flex-col items-center gap-4">
                  <button
                    onClick={() => setShowGifts((prev) => !prev)}
                    className="font-ui inline-flex items-center justify-center rounded-full bg-[#4A301F] px-6 py-2 text-sm font-semibold uppercase tracking-wide text-[#D4A857] shadow-lg shadow-[#1A1A1A]/20 transition hover:bg-[#1A1A1A]"
                    aria-expanded={showGifts}
                  >
                    {showGifts ? (
                      <span className="inline-flex items-center gap-2">
                        <FaEyeSlash aria-hidden="true" />
                        Sembunyikan
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <FaGift aria-hidden="true" />
                        Klik Disini
                      </span>
                    )}
                  </button>

                  {showGifts && (
                    <>
                      <div className="grid w-full gap-3">
                        {weddingGifts.map((gift) => (
                          <div
                            key={gift.number}
                            className="rounded-2xl border border-[#4A301F33] bg-white/80 px-6 py-4 text-center text-[#2B2B2B] shadow-[0_12px_24px_rgba(26,26,26,0.12)]"
                          >
                            <p className="text-sm uppercase tracking-[0.25em] text-[#4A301F]">{gift.bank}</p>
                            <p className="text-lg font-semibold text-[#1A1A1A]">{gift.number}</p>
                            <p className="text-sm text-[#4A301F]">a.n. {gift.name}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-center text-[#4A301F]">Mohon sertakan nama pengirim pada berita transfer.</p>

                      <form
                        className="w-full rounded-2xl border border-[#4A301F22] bg-white/85 p-4 shadow-[0_10px_20px_rgba(26,26,26,0.08)] space-y-3"
                        onSubmit={(event) => {
                          event.preventDefault();
                          const gift = weddingGifts.find((item) => item.number === transferTo) ?? weddingGifts[0];
                          const name = senderName.trim() || "Tamu Istimewa";
                          const message = `Assalamualaikum, saya ${name} telah mengirimkan kado untuk Sabrang & Yeni. Transfer ke ${gift.bank} a.n. ${gift.name} (${gift.number}).`;
                          const url = `https://wa.me/6285345333835?text=${encodeURIComponent(message)}`;
                          window.open(url, "_blank", "noopener,noreferrer");
                        }}
                      >
                        <div className="space-y-1">
                          <label className="font-ui text-xs uppercase tracking-[0.25em] text-[#4A301F]" htmlFor="sender-name">
                            Nama Pengirim
                          </label>
                          <input
                            id="sender-name"
                            type="text"
                            value={senderName}
                            onChange={(event) => setSenderName(event.target.value)}
                            className="w-full rounded-lg border border-[#D9D4CF] bg-white px-3 py-2 text-sm text-[#2B2B2B] focus:border-[#4A301F] focus:outline-none"
                            placeholder="Nama Anda"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-ui text-xs uppercase tracking-[0.25em] text-[#4A301F]" htmlFor="transfer-to">
                            Transfer ke
                          </label>
                          <select
                            id="transfer-to"
                            value={transferTo}
                            onChange={(event) => setTransferTo(event.target.value)}
                            className="w-full rounded-lg border border-[#D9D4CF] bg-white px-3 py-2 text-sm text-[#2B2B2B] focus:border-[#4A301F] focus:outline-none"
                          >
                            {weddingGifts.map((gift) => (
                              <option key={gift.number} value={gift.number}>
                                {gift.name} · {gift.bank} · {gift.number}
                              </option>
                            ))}
                          </select>
                        </div>
                        <button
                          type="submit"
                          className="font-ui inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4A301F] px-6 py-2 text-sm font-semibold uppercase tracking-wide text-[#D4A857] shadow-lg shadow-[#1A1A1A]/20 transition hover:bg-[#1A1A1A]"
                        >
                          <FaWhatsapp aria-hidden="true" />
                          Konfirmasi Pengiriman
                        </button>
                      </form>
                    </>
                  )}

                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.src}
                    className={`relative h-64 overflow-hidden border border-[#D9D4CF] bg-[#F1EFEF] shadow-lg shadow-[#1A1A1A]/10 ${
                      index === 1 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:h-auto" : ""
                    }`}
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

              <footer className="relative -mx-6 mt-4 overflow-hidden bg-[#1A1A1A] sm:-mx-12">
                <Image
                  src="/Sabrang-Yeni/pdp-42.jpg"
                  alt="Sabrang dan Yeni berpose sebagai pasangan"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
                <div className="relative mx-auto flex min-h-[520px] max-w-3xl flex-col items-center justify-end gap-4 px-8 pb-14 text-center text-white">
                  <p className="font-script text-4xl sm:text-5xl">Sabrang &amp; Yeni</p>
                  <p className="text-sm text-white/90 sm:text-base">
                    Suatu kebahagiaan &amp; kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
                    memberikan doa dan restu kepada kami.
                  </p>
                  <p className="text-xs uppercase tracking-[0.4em] text-[#D4A857]">Terima kasih</p>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
