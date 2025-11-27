"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = new Audio("/backsound.mp3");
    audio.loop = true;
    audioRef.current = audio;

    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(!audio.paused);
      } catch {
        setIsPlaying(false);
      }
    };

    startMusic();

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src="/backsound.mp3" loop autoPlay />
      <button
        type="button"
        onClick={() => setIsPlaying((prev) => !prev)}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Mute background music" : "Play background music"}
        className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#2B2B2B] shadow-lg ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a857] md:bottom-8 md:right-8"
      >
        {isPlaying ? (
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-none stroke-current stroke-2"
          >
            <path d="M10 4v10.5a2.5 2.5 0 1 1-2-2.45V7.5l10-2v7a2.5 2.5 0 1 1-2-2.45V4Z" />
          </svg>
        ) : (
          <svg
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-none stroke-current stroke-2"
          >
            <path d="M9 8 5 12h-2v4h3l5 4V6l-3 2Z" />
            <path d="m16 9 5 5" />
            <path d="m21 9-5 5" />
          </svg>
        )}
      </button>
    </>
  );
}
