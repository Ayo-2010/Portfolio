import Image from 'next/image';
import { projects } from '@/src/data/projects';

const rowOne = [...projects.slice(0, 4)];
const rowTwo = [...projects.slice(1), projects[0]];
const rowTwoStart = [...rowTwo].reverse();

export default function ProjectSection() {
  return (
    <section className="relative py-16 px-4 bg-slate-950 overflow-hidden project-marquee-mask">
      <div className="absolute inset-y-0 left-0 w-28 bg-linear-to-r from-slate-950 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-28 bg-linear-to-l from-slate-950 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl font-bold text-slate-50 mb-4 text-center">Featured Projects</h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
          A Framer-inspired dual marquee gallery with repeating project visuals, glassy borders, and hover pause.
        </p>

        <div className="space-y-6">
          <div className="group overflow-hidden rounded-4xl border border-slate-800 bg-slate-950/75 shadow-2xl shadow-slate-950/20 whitespace-nowrap">
            <div className="marquee-track flex w-max py-5 will-change-transform animate-marquee hover:[animation-play-state:paused]">
              {[rowOne, rowOne].map((row, rowIndex) => (
                <div
                  key={`row1-group-${rowIndex}`}
                  className="flex gap-5"
                  aria-hidden={rowIndex === 1}
                >
                  {row.map((project, index) => (
                    <article
                      key={`row1-${rowIndex}-${project.id}-${index}`}
                      className="min-w-64 shrink-0 rounded-[25px] border border-slate-200 bg-slate-100 shadow-xl shadow-slate-950/10 overflow-hidden"
                    >
                      <div className="relative h-52 w-64 bg-slate-100">
                        <Image
                          src={project.image}
                          width={320}
                          height={256}
                          alt={project.title}
                          className="h-full w-full object-cover"
                          priority={rowIndex === 0 && index < 2}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/85 via-slate-950/50 to-transparent p-4">
                          <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Featured</p>
                          <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="group overflow-hidden rounded-4xl border border-slate-800 bg-slate-950/75 shadow-2xl shadow-slate-950/20 whitespace-nowrap">
            <div className="marquee-track flex w-max py-5 will-change-transform animate-marquee-reverse hover:[animation-play-state:paused]">
              {[rowTwoStart, rowTwoStart].map((row, rowIndex) => (
                <div
                  key={`row2-group-${rowIndex}`}
                  className="flex gap-5"
                  aria-hidden={rowIndex === 1}
                >
                  {row.map((project, index) => (
                    <article
                      key={`row2-${rowIndex}-${project.id}-${index}`}
                      className="min-w-64 shrink-0 rounded-[25px] border border-slate-200 bg-slate-100 shadow-xl shadow-slate-950/10 overflow-hidden"
                    >
                      <div className="relative h-52 w-64 bg-slate-100">
                        <Image
                          src={project.image}
                          width={320}
                          height={256}
                          alt={project.title}
                          className="h-full w-full object-cover"
                          priority={rowIndex === 0 && index < 2}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/85 via-slate-950/50 to-transparent p-4">
                          <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Live demo</p>
                          <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

