"use client";

import Image from 'next/image';
import Link from 'next/link';
import wavingHand from '@/app/data/XmT9ub3DqFuzxxLGpYMsGC15l84 (1).avif';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh]  overflow-hidden bg-black bg">
      <div className="absolute inset-0 bg-radial-blue  opacity-20" />
      <div className="absolute -top-24 right-8 h-72 w-72  rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex  min-h-[90vh] max-w-360 flex-col justify-center px-15 py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl text-left">
          <p className="mb-2 flex items-center gap-3 text-7xl tracking-[1px] text-slate-50 font-extrabold">
            
            Hello! <Image src={wavingHand} alt="Waving hand" width={70} height={70} className="inline-block" />I&apos;m
          </p>
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-7xl md:text-[4rem]">
            <span className="bg-linear-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent">Abdullah Abdulwahab</span>
          </h1>
          <p className="mt-6 max-w-xl text-2xl font-bold leading-7 text-slate-100">
            I build scalable, production-ready web platforms with clean server-side architecture, performant React experiences, and polished product design.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects\"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
            >
              View portfolio
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-blue-500/50 bg-transparent px-8 py-3 text-sm font-semibold text-blue-500 transition hover:bg-blue-500/10"
            >
              Contact me
            </Link>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-0">
          <div className="relative flex h-96 w-96 items-center justify-center rounded-full bg-slate-800 shadow-[0_35px_120px_-35px_rgba(59,130,246,0.8)]">
            <div className="absolute inset-4 rounded-full bg-slate-950/90 shadow-inner shadow-black/30" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full overflow-hidden border border-white/10">
              <span className="text-9xl">🧛🏻‍♀️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;