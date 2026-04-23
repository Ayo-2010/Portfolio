export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Built a fullstack e-commerce solution with Next.js, TypeScript, and Stripe integration. Implemented secure payment processing, user authentication via NextAuth.js, and real-time inventory management with PostgreSQL. Achieved 99.9% uptime and handled 10k+ transactions monthly.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'NextAuth.js'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
  },
  {
    id: '2',
    title: 'Real-Time Chat Application',
    description: 'Developed a scalable chat app using Socket.io, Node.js, and MongoDB. Features include end-to-end encryption, group chats, file sharing, and push notifications. Deployed on AWS with auto-scaling, supporting 1000+ concurrent users.',
    technologies: ['Node.js', 'Socket.io', 'MongoDB', 'React', 'AWS'],
    githubUrl: 'https://github.com/username/chat-app',
    liveUrl: 'https://chat-demo.com',
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    description: 'Created an interactive dashboard for business analytics using D3.js, Express.js, and MySQL. Integrated RESTful APIs for data fetching, implemented caching with Redis, and added role-based access control. Reduced report generation time by 70%.',
    technologies: ['D3.js', 'Express.js', 'MySQL', 'Redis', 'JWT'],
    githubUrl: 'https://github.com/username/dashboard',
    liveUrl: 'https://dashboard-demo.com',
  },
];