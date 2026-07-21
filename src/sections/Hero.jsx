import { Button } from '@/components/Button'
import { AnimatedBorderButton } from '../components/AnimatedBorderButton'
import { ArrowRight, ChevronDown, Github, Linkedin, Download, Briefcase, Award, Code2, Layers } from 'lucide-react'
import { skills } from '@/data/skills'
import { useCountUp } from '@/hooks/useCountUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function StatItem({ icon: Icon, label, end, suffix }) {
  const [count, ref] = useCountUp(end, 2000)
  return (
    <div ref={ref} className="glass rounded-2xl px-6 py-4 flex items-center gap-4 min-w-[155px] sm:min-w-[180px]">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="text-2xl font-bold text-primary glow-text">{count}{suffix || ''}</div>
        <div className="text-xs text-muted-foreground whitespace-nowrap">{label}</div>
      </div>
    </div>
  )
}

function StatsRow() {
  const stats = [
    { icon: Briefcase, label: 'Projects Completed', end: 9, suffix: '+' },
    { icon: Award, label: 'Certifications', end: 6 },
    { icon: Code2, label: "Technologies", end: skills.length, suffix: '+' },
    { icon: Layers, label: "Years of Experience", end: 2 },
  ]
  return (
    <div className="mt-16 animate-fade-in animation-delay-800">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {stats.map((s, i) => (
          <StatItem key={i} icon={s.icon} label={s.label} end={s.end} suffix={s.suffix} />
        ))}
      </div>
    </div>
  )
}

export const Hero = () => {
  const reduced = useReducedMotion()
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (<section className="relative min-h-screen flex items-center overflow-hidden">
    {/*Bg*/}
    <div className="absolute inset-0">
      <img
        src="/hero-bg.jpg"
        alt="Hero Image"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
    </div>
    {/*Green Dots */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#20B2A6",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
    { /*Content */}
    <div className="container mx-auto px-6 pt-32 pb-16 md:pb-24 relative z-10">
      <div className="grid lg:grid-cols-1 gap-12 items-center">
        { /*Left Column - Text Content */}
        <div className="space-y-10 md:space-y-12 text-center">
          <div className="flex justify-center animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Welcome to my<span className="font-semibold text-primary">Portfolio !</span>
            </span>


          </div>

          {/*Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-200">
              <span className="relative inline-block">
                Computer Engineering Student
                {/* Desktop floating badge — anchored under "Student" */}
                <span className={`hidden md:inline-flex absolute top-full right-0 mt-1.5 items-center gap-1 px-2 py-1 rounded-full glass border border-primary/30 shadow-glow-sm text-[10px] md:text-xs text-primary font-medium whitespace-nowrap ${reduced ? '' : 'animate-float'}`}>
                  <span className="w-1 h-1 bg-primary rounded-full animate-pulse shrink-0" />
                  Specializing in
                </span>
              </span>
              <br />
              <span className="text-primary glow-text">
                Software</span>
              <span> Engineering <span className="font-serif italic font-normal text-white">
                & </span></span>

              <br />
              <span className="font-serif italic font-normal text-white">
                Artificial Intelligence </span>
            </h1>

            {/* Mobile badge — in flow, centered below title */}
            <div className="flex justify-center md:hidden animate-fade-in animation-delay-100">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-[10px] text-primary font-medium">
                <span className="w-1 h-1 bg-primary rounded-full animate-pulse shrink-0" />
                Specializing in
              </span>
            </div>


          </div>
          { /*CTAs  */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in animation-delay-400">
            <Button size="lg" onClick={scrollToContact}>
              Contact Me <ArrowRight className="w-5 h-5" />
            </Button>
            <a href="/nissrine_elmniai_cv.pdf" download="Nissrine_EL_MNIAI_CV.pdf">
              <AnimatedBorderButton >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </a>

          </div>
          {/*Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in animation-delay-500">
            <span className="text-sm text-muted-foreground">Follow Me: </span>
            {[
              { icon: Github, href: "https://github.com/nissrine-elmniai" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nissrine-el-mniai-0b3a28296/?locale=en" },

            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                {<social.icon className="w-5 h-5" />}
              </a>
            ))}
          </div>

        </div>
        { /*Right Column - Profile Image */}
        {/*<div className="relative animate-fade-in animation-delay-300">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0
            rounded-3xl bg-gradient-to-br
            from-primary/30 via-transparent
            to-primary/10 blur-2xl animate-pulse" />
            <div className="relative glass rounded-3xl glow-border">
              <img
                src="/profile-photo.png"

                alt="Nissrine EL MNIAI"
                className="object-cover rounded-2xl w-full aspect-[4/5]"
              />
              <div div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Seeking for an internship</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/*Skills Section*/}
      <div className="mt-20 animate-fade-in animation-delay-700">
        <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx}
                className="flex-shrink-0 px-8 py-4">
                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  {skill}
                </span></div>
            ))}
          </div>
        </div>
      </div>
      {/* Stats */}
      <StatsRow />
      {/* Scroll indicator — normal flow, plus d'absolute pour éviter le chevauchement */}
      <div className="mt-16 animate-fade-in animation-delay-900 flex justify-center">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary-foreground">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </div >
  </section >
  );
};
