import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/brand/hero";
import { EngagementCard } from "@/components/brand/engagement-card";
import { Parallelogram } from "@/components/brand/parallelogram";
import { RevealOnScroll } from "@/components/brand/reveal-on-scroll";
import { StatsBand } from "@/components/brand/stats-band";
import { Marquee } from "@/components/brand/marquee";
import { PracticeLeader } from "@/components/brand/practice-leader";
import type { EngagementSummary } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost";

interface PortalStats {
  engagements: number;
  assets: number;
  contributors: number;
}

async function getRecent(): Promise<EngagementSummary[]> {
  try {
    const res = await fetch(`${API_BASE}/api/engagements?limit=9`, { cache: "no-store" });
    if (!res.ok) return [];
    return (await res.json()) as EngagementSummary[];
  } catch {
    return [];
  }
}

async function getStats(): Promise<PortalStats> {
  try {
    const res = await fetch(`${API_BASE}/api/stats`, { cache: "no-store" });
    if (!res.ok) return { engagements: 0, assets: 0, contributors: 0 };
    return (await res.json()) as PortalStats;
  } catch {
    return { engagements: 0, assets: 0, contributors: 0 };
  }
}

export default async function HomePage() {
  const [recent, stats] = await Promise.all([getRecent(), getStats()]);

  return (
    <>
      <Hero />

      <Marquee />

      <StatsBand stats={stats} />

      {/* Recent engagements */}
      <section className="container py-20">
        <RevealOnScroll>
          <div className="flex items-end justify-between">
            <div>
              <div className="pwc-eyebrow">Recently added</div>
              <h2 className="pwc-section-title mt-3">What the practice has been building</h2>
            </div>
            <Link
              href="/search"
              className="hidden items-center gap-2 text-sm font-medium text-pwc-ink transition-colors hover:text-pwc-orange md:flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </RevealOnScroll>

        {recent.length === 0 ? (
          <RevealOnScroll delay={150}>
            <div className="mt-12 border border-dashed border-pwc-mist p-16 text-center">
              <Parallelogram className="mx-auto h-3 w-24" />
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                No engagements yet
              </h3>
              <p className="mt-2 text-pwc-steel">
                Once contributors start uploading, the practice's collective IP shows up here.
              </p>
              <Link
                href="/upload/login"
                className="mt-6 inline-flex items-center gap-2 border border-pwc-ink px-5 py-3 text-sm font-medium transition-colors hover:bg-pwc-ink hover:text-white"
              >
                Sign in to add the first one
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </RevealOnScroll>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recent.map((e, i) => (
              <RevealOnScroll key={e.id} delay={i * 70}>
                <EngagementCard engagement={e} />
              </RevealOnScroll>
            ))}
          </div>
        )}
      </section>

      {/* Promo block */}
      <section className="relative mt-12 overflow-hidden bg-pwc-ink text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-full w-[55%] -skew-x-[18deg] bg-pwc-orange" />
          <div className="absolute right-[12%] top-[18%] h-12 w-32 -skew-x-[18deg] bg-pwc-orange-hover/80" />
          <div className="absolute right-[6%] bottom-[16%] h-20 w-44 -skew-x-[18deg] bg-pwc-burgundy" />
        </div>
        <div className="container relative grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <RevealOnScroll className="md:col-span-7">
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-white md:text-6xl">
              We help your next pursuit
              <br />
              <em className="italic">land faster</em>
            </h2>
            <p className="mt-6 max-w-xl text-base text-white/90 md:text-lg">
              Lift architecture diagrams from prior engagements, reuse proposal sections from
              completed pitches, and learn from lessons captured by the team. The portal keeps
              your practice's collective IP one search away.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/search"
                className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-medium text-pwc-ink transition-all hover:bg-pwc-orange-soft"
              >
                Start exploring
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/upload/login"
                className="group inline-flex items-center gap-2 border border-white/50 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
              >
                Contribute
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <PracticeLeader />

      {/* How it works */}
      <section className="container py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <RevealOnScroll className="md:col-span-4">
            <div className="pwc-eyebrow">How the portal works</div>
            <h2 className="pwc-section-title mt-3">From search to reuse, in seconds</h2>
            <p className="mt-4 text-pwc-steel">
              Three principles that make the corpus genuinely useful, not just searchable.
            </p>
          </RevealOnScroll>

          <div className="md:col-span-8">
            <div className="grid gap-px bg-pwc-mist md:grid-cols-3">
              {[
                {
                  num: "01",
                  title: "Search that finds it",
                  body: "Filter by industry, platform, use case, function, and tech stack. Combine with keyword search to surface the exact engagement in seconds.",
                },
                {
                  num: "02",
                  title: "Contribute anything",
                  body: "Upload any file type, link to SharePoint, OneDrive, or GitHub, or bulk-upload an entire engagement folder — tagged against the practice taxonomy.",
                },
                {
                  num: "03",
                  title: "Attribution that sticks",
                  body: "Every asset is permanently attributed to its uploader. Profile pages surface in-house expertise.",
                },
              ].map((s, i) => (
                <RevealOnScroll key={s.num} delay={i * 100} className="bg-white">
                  <div className="group relative p-8 transition-colors hover:bg-pwc-cream">
                    <div className="font-display text-5xl font-semibold tracking-tighter text-pwc-orange transition-transform duration-500 group-hover:-translate-y-1">
                      {s.num}
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-pwc-ink">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-pwc-steel">{s.body}</p>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-pwc-orange transition-all duration-500 group-hover:w-full" />
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
