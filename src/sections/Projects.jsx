import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Github } from "lucide-react";
import { projects as allProjects } from '@/data/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useDragScroll } from '@/hooks/useDragScroll';

const filters = [
  { value: "all", label: "Tous" },
  { value: "web", label: "Web" },
  { value: "desktop", label: "Desktop" },
  { value: "mobile", label: "Mobile" },
];

const CARD_GAP = 24;

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const reduced = useReducedMotion();
  const { ref: scrollRef, isDragging, onMouseDown, preventClickAfterDrag } = useDragScroll();

  const filtered = activeFilter === "all"
    ? allProjects
    : allProjects.filter((p) => p.categories.includes(activeFilter));

  const updateArrows = (el) => {
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < maxScroll - 8)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return undefined

    let rafId = null
    const handleScroll = () => {
      if (rafId !== null) return
      rafId = requestAnimationFrame(() => {
        updateArrows(el)
        rafId = null
      })
    }

    handleScroll()
    el.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      el.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [activeFilter, filtered.length, scrollRef])

  const scrollByPage = (direction) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector('[data-project-card]')
    const amount = card ? card.offsetWidth + CARD_GAP : el.clientWidth
    el.scrollBy({ left: direction * amount, behavior: reduced ? 'auto' : 'smooth' })
  }

  return <section id="projects" className="py-32 relative overflow-hidden">
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mx-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          Featured Work</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that
          <span className="font-serif italic font-normal text-white"> make an impact</span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
          A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((filter, idx) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            style={{ animationDelay: reduced ? '0ms' : `${(idx + 1) * 100}ms` }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 animate-fade-in ${
              activeFilter === filter.value
                ? "bg-primary text-background"
                : "bg-surface text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-16 animate-fade-in">
          Aucun projet dans cette catégorie pour le moment.
        </p>
      )}

      {filtered.length > 0 && (
        <div className="relative">
          <div
            ref={scrollRef}
            role="region"
            aria-label="Carrousel de projets"
            tabIndex={0}
            onMouseDown={onMouseDown}
            onClickCapture={preventClickAfterDrag}
            className={`flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-4 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          >
            {filtered.map((project, idx) => (
              <div
                key={project.title}
                data-project-card
                className="group glass rounded-2xl overflow-hidden snap-start shrink-0 w-[85vw] sm:w-[340px] animate-fade-in"
                style={{ animationDelay: reduced ? '0ms' : `${(idx + 1) * 100}ms` }}>
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                        {tag}</span>
                    ))}</div>
                </div>

              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Projet précédent"
            disabled={!canPrev}
            onClick={() => scrollByPage(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-11 h-11 rounded-full glass-strong text-muted-foreground hover:text-primary transition-all duration-300 disabled:opacity-35 disabled:pointer-events-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            aria-label="Projet suivant"
            disabled={!canNext}
            onClick={() => scrollByPage(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-11 h-11 rounded-full glass-strong text-muted-foreground hover:text-primary transition-all duration-300 disabled:opacity-35 disabled:pointer-events-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  </section >
}
