"use client";

import { useEffect, useState } from "react";
import { EventDetail, Location } from "../invitationData";
import { FaMap } from "react-icons/fa6";

type CountdownSectionProps = {
  events: EventDetail[];
  location: Location;
  weddingTimestamp: number;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (timestamp: number): TimeLeft => {
  const now = Date.now();
  const distance = Math.max(timestamp - now, 0);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default function CountdownSection({ events, location, weddingTimestamp }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(weddingTimestamp));

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft(weddingTimestamp)), 1000);
    return () => window.clearInterval(timer);
  }, [weddingTimestamp]);

  return (
    <section className="rounded-2xl border border-[#D9D4CF] bg-gradient-to-b from-[#f7f4ef] to-[#e8e1d8] p-6 shadow-[0_18px_35px_rgba(26,26,26,0.12)] sm:p-8">
      <div className="text-center">
        <p className="font-ui text-xs uppercase tracking-[0.35em] text-[#C57B8B]">Hitung Mundur</p>
        <h2 className="mt-2 text-3xl font-semibold text-[#1A1A1A]">Menuju Hari Bahagia</h2>
        <p className="mt-2 text-[#4A301F]">08 Februari 2026 · Ponorogo, Jawa Timur</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[{ label: "Hari", value: timeLeft.days }, { label: "Jam", value: timeLeft.hours }, { label: "Menit", value: timeLeft.minutes }, { label: "Detik", value: timeLeft.seconds }].map(
          (item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#D4A85733] bg-white/80 p-4 text-center shadow-inner shadow-[#D4A85722]"
            >
              <p className="text-3xl font-semibold text-[#1A1A1A]">{String(item.value).padStart(2, "0")}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-[#4A301F]">{item.label}</p>
            </div>
          )
        )}
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
        <p className="mt-3 text-lg font-semibold text-[#1A1A1A]">{location.name}</p>
        <p className="text-sm text-[#4A301F]">{location.address}</p>
        {location.mapsUrl && (
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="font-ui mt-4 inline-flex items-center justify-center rounded-full bg-[#4A301F] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A857] shadow-lg shadow-[#1A1A1A]/20 transition hover:bg-[#1A1A1A]"
          >
            <FaMap className="mr-2" />
            Buka Maps
          </a>
        )}
      </div>
    </section>
  );
}
