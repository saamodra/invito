import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0f] text-white flex items-center justify-center px-6">
      <div className="max-w-4xl w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-10 shadow-xl backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">Invito</p>
            <h1 className="mt-3 text-3xl font-semibold">Your event hub, coming soon.</h1>
            <p className="mt-2 text-white/70">
              We are building a place to manage events, RSVPs, and guest experiences. A few pages
              are still in progress—explore what is ready, and watch this space for more.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold">Dashboard</p>
            <p className="mt-2 text-sm text-white/65">Overview of events, metrics, and quick actions.</p>
            <span className="mt-4 inline-flex w-fit rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
              Coming soon
            </span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold">Guest Management</p>
            <p className="mt-2 text-sm text-white/65">Send invites, track RSVPs, and group guests.</p>
            <span className="mt-4 inline-flex w-fit rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
              Coming soon
            </span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold">Venues</p>
            <p className="mt-2 text-sm text-white/65">Add locations and share directions with attendees.</p>
            <span className="mt-4 inline-flex w-fit rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
              Not built yet
            </span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold">Settings</p>
            <p className="mt-2 text-sm text-white/65">Branding, notification preferences, integrations.</p>
            <span className="mt-4 inline-flex w-fit rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
              Not built yet
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
