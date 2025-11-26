"use client";

import { useState } from "react";
import { FaGift, FaEyeSlash, FaWhatsapp } from "react-icons/fa";
import { WeddingGift } from "../invitationData";

type GiftSectionProps = {
  weddingGifts: WeddingGift[];
};

export default function GiftSection({ weddingGifts }: GiftSectionProps) {
  const [showGifts, setShowGifts] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [transferTo, setTransferTo] = useState(weddingGifts[0]?.number ?? "");
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  return (
    <section className="rounded-2xl border border-[#C57B8B]/40 bg-gradient-to-br from-[#fdf8f4] via-[#f0e3da] to-[#e5d2c9] p-6 shadow-[0_20px_45px_rgba(26,26,26,0.15)] sm:p-8">
      <div className="text-center">
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-[#C57B8B]">Kado Pernikahan</p>
        <h2 className="mt-2 text-3xl font-semibold text-[#1A1A1A]">Ungkapan Kasih</h2>
        <p className="mt-2 text-[#4A301F]">
          Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin berbagi kebahagiaan, kami dengan
          senang hati menerimanya melalui:
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
                  className="rounded-2xl border border-[#4A301F33] bg-white/80 px-6 py-4 text-center text-[#2B2B2B] shadow-[0_12px_24px_rgba(26,26,26,0.12)] space-y-2"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#4A301F]">{gift.bank}</p>
                  <p className="text-lg font-semibold text-[#1A1A1A]">{gift.number}</p>
                  <p className="text-sm text-[#4A301F]">a.n. {gift.name}</p>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard
                        .writeText(gift.number)
                        .then(() => {
                          setCopiedNumber(gift.number);
                          window.setTimeout(() => setCopiedNumber(null), 2000);
                        })
                        .catch(() => setCopiedNumber(null));
                    }}
                    className="font-ui inline-flex items-center justify-center rounded-full bg-[#4A301F] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A857] shadow-lg shadow-[#1A1A1A]/15 transition hover:bg-[#1A1A1A]"
                  >
                    {copiedNumber === gift.number ? "Tersalin" : "Salin Nomor"}
                  </button>
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
  );
}
