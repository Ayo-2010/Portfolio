import { skills } from '@/src/data/skills';

export default function TechMarquee() {
  return (
    <div className="relative flex overflow-x-hidden border-y border-slate-800 bg-slate-950 py-4">
      <div className="marquee-track flex w-max whitespace-nowrap will-change-transform animate-marquee">
        {[skills, skills].map((group, groupIndex) => (
          <div
            key={`skills-group-${groupIndex}`}
            className="flex gap-8 pr-0"
            aria-hidden={groupIndex === 1}
          >
            {group.map((skill, index) => (
              <span
                key={`${groupIndex}-${skill}-${index}`}
                className="shrink-0 text-2xl font-bold text-slate-500 transition-colors cursor-default hover:text-blue-400"
              >
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-slate-950 to-transparent" />
    </div>
  );
}
