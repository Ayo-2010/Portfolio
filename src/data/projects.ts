export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Fullstack E-Commerce',
    description: 'Built a secure checkout flow with Stripe, user auth via NextAuth, and a PostgreSQL database.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
    link: 'https://demo.com',
    github: 'https://github.com/yourusername',
    image: '/window.svg',
  },
  {
    id: 2,
    title: 'Real-time Task Manager',
    description: 'A collaborative dashboard using WebSockets for live updates and MongoDB for data persistence.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: 'https://demo.com',
    github: 'https://github.com/yourusername',
    image: '/globe.svg',
  },
  {
    id: 3,
    title: 'Data Analytics Platform',
    description: 'Enterprise analytics dashboard with real-time data processing, advanced filtering, and custom reporting.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'D3.js'],
    link: 'https://demo.com',
    github: 'https://github.com/yourusername',
    image: '/file.svg',
  },
  {
    id: 4,
    title: 'Marketing Landing Page',
    description: 'High-converting landing page with A/B testing, motion UI, and SEO-first architecture.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://demo.com',
    github: 'https://github.com/yourusername',
    image: '/next.svg',
  },
  {
    id: 5,
    title: 'Deployment Automation',
    description: 'Automated CI/CD workflows and observability pipelines for rapid app deployment and monitoring.',
    tech: ['Vercel', 'GitHub Actions', 'Docker'],
    link: 'https://demo.com',
    github: 'https://github.com/yourusername',
    image: '/vercel.svg',
  },
];