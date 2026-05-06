import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

import sumitImage from "@/assets/ss_image.jpg";

export function PracticeLeader() {
  return (
    <section className="bg-pwc-cream">
      <div className="container py-24">
        <div className="pwc-eyebrow">Practice leadership</div>
        <h2 className="pwc-section-title mt-3">Meet the leader of the practice</h2>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-12">
          {/* Photo with decorative orange parallelogram backdrop */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div
                aria-hidden
                className="absolute -left-6 -top-6 h-20 w-32 -skew-x-[18deg] bg-pwc-orange-soft"
              />
              <div
                aria-hidden
                className="absolute -bottom-5 -right-5 h-12 w-20 -skew-x-[18deg] bg-pwc-burgundy/15"
              />
              <div
                aria-hidden
                className="absolute -bottom-2 -left-2 h-1.5 w-24 -skew-x-[18deg] bg-pwc-orange"
              />
              <div className="relative overflow-hidden bg-white shadow-[0_24px_60px_rgba(15,15,15,0.18)]">
                <Image
                  src={sumitImage}
                  alt="Sumit Srivastav, Partner and Leader, Agentic Automation Practice, PwC India"
                  className="h-auto w-full"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          {/* Bio + contact */}
          <div className="md:col-span-7 md:pl-6">
            <h3 className="font-display text-4xl font-semibold tracking-tightest text-pwc-ink md:text-5xl">
              Sumit Srivastav
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-pwc-steel">
              <span className="font-medium text-pwc-ink">Partner &amp; Leader</span>
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-pwc-mist" />
              <span>Agentic Automation</span>
              <span aria-hidden className="inline-block h-1 w-1 rounded-full bg-pwc-mist" />
              <span>PwC India</span>
            </div>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-pwc-steel md:text-lg">
              Sumit leads PwC India&apos;s Agentic Automation Practice, partnering with
              clients across BFSI, Telecom, FMCG, Healthcare and beyond to design and
              deliver the next generation of intelligent operations.
            </p>

            <a
              href="mailto:sumit.srivastav@pwc.com"
              className="group mt-10 inline-flex items-center gap-2 border border-pwc-ink bg-pwc-ink px-6 py-3 text-sm font-medium text-white transition-all hover:bg-pwc-orange hover:border-pwc-orange"
            >
              <Mail className="h-4 w-4" />
              Get in touch with Sumit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
