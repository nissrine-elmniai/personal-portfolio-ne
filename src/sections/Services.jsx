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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`glass rounded-2xl p-6 transition-all duration-300 border ${service.featured ? 'glow-border' : 'border-border hover:border-primary/40'} ${reduced ? '' : 'hover:-translate-y-1'} animate-fade-in`}
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
