import Link from "next/link";
import { GENRES } from "@/lib/constants";
import { GlassCard } from "@/components/glass/GlassCard";

export default function HomePage() {
  return (
    <section className="space-y-6">
      <GlassCard className="rounded-3xl p-8">
        <h1 className="text-4xl font-bold">Shirwal Circle</h1>
        <p className="mt-2 text-white/80">
          One website for all local businesses in your town.
        </p>
        <Link href="/vendors" className="mt-4 inline-block underline">
          Explore vendors →
        </Link>
      </GlassCard>

      <GlassCard className="p-6">
        <h2 className="mb-3 text-xl font-semibold">Genres</h2>
        <div className="flex flex-wrap gap-2">
          {GENRES.map((g) => (
            <span key={g} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm">
              {g}
            </span>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
