import Image from "next/image";
import { CoupleDetail } from "../invitationData";

type CoupleSectionProps = {
  couple: CoupleDetail[];
};

export default function CoupleSection({ couple }: CoupleSectionProps) {
  return (
    <section className="grid gap-8 border-y border-[#D9D4CF] py-12">
      {couple.map((person) => (
        <div
          key={person.label}
          className="flex flex-col gap-6 border border-[#4A301F33] bg-[#d9d4cf]/80 p-6 text-center text-[#2B2B2B] shadow-[0_15px_30px_rgba(26,26,26,0.15)]"
        >
          <span className="font-ui inline-flex items-center justify-center self-center rounded-full border border-[#4A301F33] bg-white/90 px-4 py-1 text-sm font-semibold uppercase tracking-[0.4em] text-[#4A301F] shadow-sm shadow-[#1A1A1A]/15">
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
              priority={person.label === "Mempelai Pria"}
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
  );
}
