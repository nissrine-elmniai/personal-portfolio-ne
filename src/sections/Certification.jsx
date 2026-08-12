import { ArrowUpRight } from "lucide-react";
import { certifications } from '@/data/certifications';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Card = ({ certif }) => (
  <div className="group glass rounded-2xl overflow-hidden shrink-0 w-[280px] md:w-[340px] mr-6">
    {/*Image */}
    <div className="relative overflow-hidden aspect-video">
      <img
        src={certif.image}
        alt={certif.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
      {/*Overlay Link */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href={certif.link} aria-label={`Voir la certification ${certif.title}`} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </div>

    {/*Content */}
    <div className="p-6 space-y-4">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{certif.title}</h3>
        <ArrowUpRight className="w-5 h-5
          text-muted-foreground group-hover:text-primary
          group-hover:translate-x-1
          group-hover:-translate-y-1 transition-all" />
      </div>
      <div className="flex flex-wrap gap-2">
        {certif.tags.map((tag, tagIdx) => (
          <span
            key={tagIdx}
            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
            {tag}</span>
        ))}
      </div>
    </div>
  </div>
);

export const Certification = () => {
  const reduced = useReducedMotion();
  // Durée proportionnelle au nombre d'items pour garder une vitesse en px/s constante (~30s pour 6 certifs)
  const duration = Math.max(30, certifications.length * 5);

  return <section id="certifications" className="py-32 relative overflow-hidden">
    {/*Bg glows */}
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10">
      {/*Section Header */}
      <div className="text-center mx-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          Certifications</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Credentials that
          <span className="font-serif italic font-normal text-white"> matter</span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
          Professional certifications that highlight my commitment to continuous learning and staying up to date with modern technologies.
        </p>
      </div>

      {/*Marquee — défilement infini CSS, pause au survol */}
      <div
        role="region"
        aria-label="Liste des certifications"
        className={`${reduced ? "overflow-x-auto scrollbar-hide" : "overflow-hidden"} animate-fade-in animation-delay-300`}
      >
        <div
          className={reduced ? "flex w-max" : "flex w-max animate-marquee hover:[animation-play-state:paused]"}
          style={reduced ? undefined : { animationDuration: `${duration}s` }}
        >
          {certifications.map((certif) => <Card key={certif.title} certif={certif} />)}
          {!reduced && (
            <div aria-hidden="true" className="flex">
              {certifications.map((certif) => <Card key={`${certif.title}-dup`} certif={certif} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
}