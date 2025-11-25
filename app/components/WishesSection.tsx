"use client";

import { useEffect, useState } from "react";
import { FaEnvelopeOpenText, FaHeart, FaPaperPlane } from "react-icons/fa";

type WishesSectionProps = {
  invitedName?: string;
};

type Wish = {
  name: string;
  message: string;
  timestamp: number;
};

export default function WishesSection({ invitedName = "Tamu Istimewa" }: WishesSectionProps) {
  const [name, setName] = useState(invitedName);
  const [message, setMessage] = useState("");
  const [page, setPage] = useState(1);
  const [wishes, setWishes] = useState<Wish[]>([
    {
      name: "Sahabat Lama",
      message: "Selamat menempuh hidup baru! Semoga selalu diberi kebahagiaan dan keberkahan.",
      timestamp: Date.now() - 1000 * 60 * 60 * 3,
    },
    {
      name: "Keluarga Besar",
      message: "Barakallah untuk pernikahannya. Semoga menjadi keluarga sakinah, mawaddah, warahmah.",
      timestamp: Date.now() - 1000 * 60 * 60,
    },
  ]);
  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(wishes.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleWishes = wishes.slice(startIndex, startIndex + pageSize);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#C57B8B]/40 bg-gradient-to-br from-[#fff8f3] via-[#f3e4da] to-[#e5d2c9] p-6 shadow-[0_20px_45px_rgba(26,26,26,0.15)] sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(197,123,139,0.12),_transparent_45%)] opacity-80" />
      <div className="relative space-y-5">
        <div className="text-center space-y-2">
          <p className="font-ui text-xs uppercase tracking-[0.3em] text-[#C57B8B]">Doa &amp; Ucapan</p>
          <h2 className="text-3xl font-semibold text-[#1A1A1A]">Kirimkan Harapan</h2>
          <p className="text-sm text-[#4A301F]">
            Titipkan pesan hangat untuk Sabrang &amp; Yeni. Kami senang membaca doa terbaik dari Anda.
          </p>
        </div>

        <form
          className="space-y-4 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-[0_12px_24px_rgba(26,26,26,0.1)] sm:p-5"
          onSubmit={(event) => {
            event.preventDefault();
            const sender = name.trim() || "Tamu Istimewa";
            const wishMessage =
              message.trim() ||
              "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah mawaddah warahmah.";
            setWishes((prev) => [{ name: sender, message: wishMessage, timestamp: Date.now() }, ...prev]);
            setMessage("");
            setPage(1);
          }}
        >
          <div className="space-y-1">
            <label className="font-ui text-xs uppercase tracking-[0.25em] text-[#4A301F]" htmlFor="wish-name">
              Nama Anda
            </label>
            <input
              id="wish-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-lg border border-[#D9D4CF] bg-white px-3 py-2 text-sm text-[#2B2B2B] focus:border-[#4A301F] focus:outline-none"
              placeholder="Tamu Istimewa"
              autoComplete="name"
            />
          </div>

          <div className="space-y-1">
            <label className="font-ui text-xs uppercase tracking-[0.25em] text-[#4A301F]" htmlFor="wish-message">
              Ucapan Anda
            </label>
            <textarea
              id="wish-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="min-h-[120px] w-full rounded-lg border border-[#D9D4CF] bg-white px-3 py-2 text-sm text-[#2B2B2B] focus:border-[#4A301F] focus:outline-none"
              placeholder="Doa, harapan, atau kesan untuk pasangan"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-[#4A301F]">
            <span className="inline-flex items-center gap-2 font-semibold text-[#C57B8B]">
              <FaHeart aria-hidden="true" />
              Terima kasih atas ucapannya
            </span>
            <FaEnvelopeOpenText aria-hidden="true" className="text-[#4A301F]" />
          </div>

          <button
            type="submit"
            className="font-ui inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4A301F] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A857] shadow-lg shadow-[#1A1A1A]/20 transition hover:bg-[#1A1A1A]"
          >
            <FaPaperPlane aria-hidden="true" />
            Kirim Ucapan
          </button>
        </form>

        <div className="space-y-3 rounded-2xl border border-[#4A301F11] bg-white/70 p-4 shadow-[0_8px_20px_rgba(26,26,26,0.08)] sm:p-5">
          <div className="flex items-center justify-between text-sm text-[#4A301F]">
            <span className="font-semibold text-[#1A1A1A]">Ucapan Terkini</span>
            <span className="rounded-full bg-[#F1EFEF] px-3 py-1 text-xs font-semibold text-[#4A301F]">
              {wishes.length} ucapan
            </span>
          </div>
          <div className="grid gap-3">
            {visibleWishes.map((wish) => (
              <article
                key={`${wish.name}-${wish.timestamp}`}
                className="rounded-xl border border-[#D9D4CF] bg-white/90 px-3 py-3 shadow-[0_8px_18px_rgba(26,26,26,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#1A1A1A]">{wish.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#C57B8B]">
                    {new Date(wish.timestamp).toLocaleDateString("id-ID", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#4A301F]">{wish.message}</p>
              </article>
            ))}
            {visibleWishes.length === 0 && (
              <p className="text-center text-sm text-[#4A301F]">Belum ada ucapan pada halaman ini.</p>
            )}
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-[#4A301F]">
            <button
              type="button"
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="rounded-full border border-[#D9D4CF] bg-white px-3 py-1 font-semibold text-[#4A301F] shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
            >
              Sebelumnya
            </button>
            <button
              type="button"
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full border border-[#D9D4CF] bg-white px-3 py-1 font-semibold text-[#4A301F] shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
