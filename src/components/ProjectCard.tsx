import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <div className="min-w-[300px] max-w-[320px] bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl shadow-slate-950/20 transition-all duration-200 hover:-translate-y-0.5">
      <div className="overflow-hidden rounded-2xl border border-slate-800 mb-4 bg-slate-900">
        <Image
          src={project.image}
          width={480}
          height={280}
          alt={project.title}
          className="h-48 w-full object-cover"
          priority={priority}
        />
      </div>

      <h3 className="text-xl font-semibold text-slate-50 mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4 leading-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="bg-slate-800/80 text-slate-300 text-[11px] uppercase tracking-[0.14em] px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-blue-500"
        >
          View Project
        </Link>
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-blue-300 transition hover:border-blue-400 hover:text-blue-200"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}