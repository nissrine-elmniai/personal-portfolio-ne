import { ChevronRight, Layers, Sparkles, Users, Eye, ArrowRight } from "lucide-react"
import { highlights } from '@/data/highlights'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const iconMap = {
  Layers, Sparkles, Users, Eye,
}

export const About = () => {
  const reduced = useReducedMotion()

  const quickFacts = [
    { label: "Name", value: "Nissrine El Mniai" },
    { label: "Location", value: "Oujda, Morocco" },
    { label: "Email", value: "nissrineelmniai0@gmail.com" },
    { label: "Degree", value: "Computer Engineering Student" },
    { label: "Interests", value: "AI, Full-Stack Development & DevOps" },
    { label: "Availability", value: "Open to PFE Internship (Feb 2027)" },
  ]

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="flex flex-col h-full space-y-8 lg:space-y-8">
            <div className="space-y-8">
              {/* Label */}
              <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-200 text-secondary-foreground">
                Building the future,
                <span className="font-serif italic font-normal text-white"> one component at a time</span>
              </h2>

              {/* Structured paragraphs */}
              <div className="space-y-6 animate-fade-in animation-delay-300">
                <div>
                  <span className="text-primary text-xs uppercase tracking-wider mb-1 block opacity-80">Formation</span>
                  <p className="text-muted-foreground">
                    I am a final-year Computer Engineering student at <strong className="font-semibold text-primary">ENSA Oujda</strong>, specializing in <strong className="font-semibold text-primary">Software Engineering and Artificial Intelligence</strong>. I hold a Baccalaureate in Physical Sciences and Chemistry with <strong className="font-semibold text-primary">Very Good Honors</strong>, which built the scientific foundation for my engineering path.
                  </p>
                </div>



                <div>
                  <span className="text-primary text-xs uppercase tracking-wider mb-1 block opacity-80">Objectifs</span>
                  <p className="text-muted-foreground">
                    I'm driven by curiosity and attention to detail — always exploring new technologies, from <strong className="font-semibold text-primary">system optimization</strong> to <strong className="font-semibold text-primary">AI-driven solutions</strong>. I'm currently seeking a <strong className="font-semibold text-primary">PFE internship</strong> in Full-Stack development, available from <strong className="font-semibold text-primary">February 2027</strong> for 4-6 months.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:mt-auto space-y-8">
              {/* Quick Facts */}
              <div className="glass rounded-2xl p-6 border border-border animate-fade-in animation-delay-[500ms]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {quickFacts.map((fact, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{fact.label}:</span>{" "}
                        {fact.label === "Email" ? (
                          <a href={`mailto:${fact.value}`} className="hover:text-primary transition-colors">
                            {fact.value}
                          </a>
                        ) : (
                          fact.value
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="animate-fade-in animation-delay-400">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all duration-300 group"
                >
                  See my complete career
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col h-full space-y-10 lg:space-y-0">
            <div>
              {/* 4 Highlights Cards */}
              <div className="grid sm:grid-cols-2 gap-15">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className={`glass p-6 rounded-2xl border border-border transition-all duration-300 animate-fade-in ${reduced ? '' : 'hover:-translate-y-1 hover:border-primary/40'}`}
                    style={{
                      animationDelay: `${(idx + 1) * 100}ms`
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                      {(() => { const Icon = iconMap[item.icon]; return Icon ? <Icon className="w-6 h-6 text-primary" /> : null })()}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote — repositioned under cards */}
            <div className="lg:mt-16">
              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-[500ms] relative">
                <span className="absolute -top-4 left-3 text-7xl text-primary/10 font-serif leading-none select-none" aria-hidden="true">"</span>
                <p className="text-lg font-medium italic text-foreground relative z-10">
                  "My mission is to create digital experiences that are not just functional, but truly delightful — products that users love to use and developers love to maintain"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  )
}
