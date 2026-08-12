import { Code, Smartphone, Sparkles, Database, GitBranch, ClipboardList } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web apps with React, Symfony, Spring Boot, and Next.js — from responsive UIs to robust APIs and database integration.",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform and native mobile solutions using Android Studio, Java/XML, and Firebase for real-time backends.",
  },
  {
    icon: Sparkles,
    title: "AI & Data Science",
    description: "Machine learning pipelines, RAG systems, OCR solutions, and data analysis with Python, Pandas, Matplotlib, and Hugging Face.",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Relational (MySQL, SQLite, PostgreSQL) and document-based (Firebase) database architecture, optimization, and ORM integration.",
  },
  {
    icon: GitBranch,
    title: "DevOps & Version Control",
    description: "CI/CD pipelines, Docker, Kubernetes, Ansible, Terraform, Vagrant — plus Git/GitHub workflows and automated testing with Jenkins.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Agile/Scrum methodologies, team coordination, requirement analysis with UML/Merise, and end-to-end project delivery.",
  },
]

const FILE_NAMES = {
  'Web Development': 'web-dev.sh',
  'Mobile App Development': 'mobile-app.kt',
  'AI & Data Science': 'ai-data.py',
  'Database Design': 'database.sql',
  'DevOps & Version Control': 'devops.yml',
  'Project Management': 'sprint.log',
}

const GRID_PLACEMENT = {
  'Web Development': 'md:col-span-2 lg:col-span-2 lg:row-span-2',
  'Mobile App Development': 'lg:col-start-3 lg:row-start-2',
  'AI & Data Science': 'lg:col-start-4 lg:row-start-2 lg:row-span-2',
  'Database Design': 'md:col-span-2 lg:col-start-1 lg:row-start-3 lg:col-span-2',
  'DevOps & Version Control': 'lg:col-start-3 lg:row-start-1 lg:col-span-2',
  'Project Management': 'lg:col-start-3 lg:row-start-3',
}

const TECH_KEYWORDS = [
  'Spring Boot', 'Hugging Face', 'Android Studio', 'Next.js',
  'PostgreSQL', 'Java/XML', 'Kubernetes', 'GitHub',
  'React', 'Symfony', 'Firebase', 'Python', 'Pandas',
  'Matplotlib', 'Docker', 'Ansible', 'Terraform', 'Vagrant',
  'MySQL', 'SQLite', 'Jenkins', 'UML/Merise', 'CI/CD', 'RAG',
]

const TECH_RE = new RegExp(
  `(${TECH_KEYWORDS.slice().sort((a, b) => b.length - a.length)
    .map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})`,
  'g'
)

const DOT_COLORS = ['bg-[#ff5f57]', 'bg-[#febc2e]', 'bg-[#28c840]']

const TechTag = ({ children }) => (
  <code className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-primary/10 border border-primary/25 text-primary">
    {children}
  </code>
)

const renderDescription = (description) =>
  description.split(TECH_RE).map((part, i) =>
    TECH_KEYWORDS.includes(part)
      ? <TechTag key={i}>{part}</TechTag>
      : <span key={i}>{part}</span>
  )

export const Services = () => {
  const reduced = useReducedMotion()

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Services that <span className="font-serif italic text-white">deliver</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            As a software engineering student with hands-on experience across the full stack, I offer technical services that bridge development, data, and deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <article
              key={idx}
              className={`services-card group bg-card border rounded-lg overflow-hidden text-left transition-[border-color,box-shadow,transform] duration-300 ${service.featured ? 'border-primary/30 hover:border-primary shadow-glow-sm' : 'border-border hover:border-primary'} ${reduced ? '' : 'hover:shadow-glow-sm group-hover:-translate-y-1'} ${GRID_PLACEMENT[service.title]} animate-fade-in`}
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="flex items-center justify-between border-b border-border bg-muted/30 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`dot dot-${i} w-2.5 h-2.5 rounded-full ${DOT_COLORS[i]} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  ))}
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {FILE_NAMES[service.title]}
                </span>
              </div>

              <div className={`p-5 ${service.featured ? 'lg:p-7' : ''}`}>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-9 h-9 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <service.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className={`font-mono font-semibold text-foreground ${service.featured ? 'lg:text-lg' : ''}`}>
                    <span className="text-primary mr-1">$</span>
                    {service.title}
                  </h3>
                </div>
                <p className={`text-sm text-muted-foreground leading-relaxed ${service.featured ? 'lg:text-[15px]' : ''}`}>
                  {renderDescription(service.description)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}