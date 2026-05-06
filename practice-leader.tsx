import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

import sumitImage from "@/assets/ss_image.jpg";

export function PracticeLeader() {
  return (
    <section className="bg-pwc-cream">
      <div className="container py-24">
        <div className="pwc-eyebrow">Practice leadership</div>
        <h2 className="pwc-section-title mt-3">Meet the leader of the practice</h2>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-12">
          {/* Photo with decorative orange parallelogram backdrop */}
          <div className="md:col-span-3">
            <div className="relative mx-auto w-[200px]">
              <div
                aria-hidden
                className="absolute -left-3 -top-3 h-12 w-20 -skew-x-[18deg] bg-pwc-orange-soft"
              />
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 h-8 w-14 -skew-x-[18deg] bg-pwc-burgundy/15"
              />
              <div
                aria-hidden
                className="absolute -bottom-1 -left-1 h-1 w-16 -skew-x-[18deg] bg-pwc-orange"
              />
              <div className="relative overflow-hidden bg-white shadow-[0_18px_40px_rgba(15,15,15,0.16)]">
                <Image
                  src={sumitImage}
                  alt="Sumit Srivastav, Partner and Leader, Agentic Automation Practice, PwC India"
                  width={200}
                  height={250}
                  sizes="200px"
                  quality={92}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          {/* Bio + contact */}
          <div className="md:col-span-9 md:pl-4">
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
