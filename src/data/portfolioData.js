export const portfolioData = {
  name: 'Mohamed Lamine Tbal',
  title: 'AI Software Engineer',
  shortBio:
    'Working at the intersection of artificial intelligence and software engineering.',
  location: 'Morocco',
  availability: 'Open to opportunities',
  story: [
    'I work across software engineering and AI to build practical systems that combine strong engineering practices with AI-driven functionality. What matters most to me is creating software that has a clear purpose and practical value, while continuously exploring new developments and keeping up with how both fields evolve.',
  ],
  email: 'mohamedlaminetbal@gmail.com',
  copyrightYear: 2026,
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/MohamedLamineTbal/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-lamine-tbal/' },
  ],
  projects: [
    {
      title: 'ERP AI Operations Agent',
      year: '2026',
      description:
        'A safety-first AI agent that lets teams query ERP data in natural language and carry out controlled business operations with validated tools and human approval.',
      technologies: ['Python', 'LangGraph', 'LangChain', 'PostgreSQL'],
      accent: 'amber',
      preview: 'agent',
      link: {
        label: 'GitHub',
        url: 'https://github.com/MohamedLamineTbal/AI-ERP-Operations-Agent',
      },
    },
    {
      title: 'Relay',
      year: '2026',
      description:
        'A full-stack payment SaaS powered by Stripe, built for businesses to collect one-time payments, track every transaction, and recover gracefully from payment failures.',
      technologies: ['TypeScript', 'NestJS', 'PostgreSQL', 'Stripe'],
      accent: 'blue',
      preview: 'payment',
      link: {
        label: 'GitHub',
        url: 'https://github.com/MohamedLamineTbal/relay',
      },
    },
    {
      title: 'AI Contract Risk Checker',
      year: '2026',
      description:
        'An AI-driven contract review system that analyzes uploaded agreements, flags risky or non-compliant clauses, and evaluates them against internal legal policies and previously approved contracts using RAG.',
      technologies: ['RAG', 'LLMs', 'Vector Search', 'Policy Retrieval'],
      accent: 'rose',
      preview: 'contract',
      status: 'In Progress',
    },
  ],
  skills: [
    {
      category: 'Frontend',
      technologies: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      technologies: ['Python', 'Java', 'TypeScript', 'Node.js', 'FastAPI'],
    },
    {
      category: 'Data',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      category: 'Tools',
      technologies: ['AWS', 'Docker', 'Git', 'CI/CD'],
    },
  ],
  education: ['B.Sc. Computer Science'],
  languages: ['English - C1', 'French - C1', 'Arabic - Native'],
}
