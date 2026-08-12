import { activities } from '@/data/activities';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const gitBranchIcon = (
    <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        className="w-3.5 h-3.5"
    >
        <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V5.25a2.5 2.5 0 0 1-2.5 2.5h-.333a1.5 1.5 0 0 0-1.5 1.5v.378a2.25 2.25 0 1 1-1.5 0V9.25a1.5 1.5 0 0 0-1.5-1.5H4.5a2.5 2.5 0 0 1-2.5-2.5v-.122A2.25 2.25 0 1 1 3.5 3.25v.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1V9.25a2.5 2.5 0 0 1 .5.072V9.25a3 3 0 0 1 3-3h.334a1 1 0 0 0 1-1v-.122A2.25 2.25 0 0 1 9.5 3.25Zm-6 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4.947 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2.776-16a1 1 0 1 0 .1 2 1 1 0 0 0-.1-2Z"
        />
    </svg>
);

export const Activities = () => {
    const reducedMotion = useReducedMotion();

    return <section id="activities"
        className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96
    bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        />
        <div className="container mx-auto px-6 relative z-10">
            {/*Section Header */}
            <div className="max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium
        tracking-wider uppercase animate-fade-in"
                >Beyond the Code</span>
                <h2 className="text-4xl md:text-5xl font-bold
        mt-4 mb-6 animate-fade-in animation-delay-100
        text-secondary-foreground">
                    Passions that <span className="font-serif italic font-normal text-white">
                        shape my perspective</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in
        animation-delay-200">
                    A glimpse into my extracurricular journey.
                </p>
            </div>

            {/*Commit log */}
            <div className="relative max-w-3xl mx-auto">
                {/*HEAD indicator */}
                <div className="relative left-5 md:left-6 mb-1">
                    <span className="inline-flex items-center gap-2
                        text-muted-foreground font-mono text-xs
                        border border-border px-2 py-0.5 rounded-md bg-surface/60">
                        <span className="text-primary" aria-hidden="true">{gitBranchIcon}</span>
                        <span className="uppercase tracking-wider">HEAD</span>
                    </span>
                </div>

                {/*Vertical line + nodes */}
                <div className="relative">
                    <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px
                        bg-gradient-to-b from-primary/50 via-primary/25 to-transparent"
                    />
                    <ol className="relative">
                        {activities.map((act, idx) => (
                            <li key={idx}
                                className={`group relative pl-12 md:pl-14 animate-fade-in
                                    ${idx % 2 === 1 ? "bg-white/[0.02]" : ""}
                                    ${idx === 0 ? "rounded-t-md" : ""}
                                    ${idx === activities.length - 1 ? "rounded-b-md" : ""}`}
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                {/*Commit dot on the line */}
                                <span className={`absolute left-5 md:left-6 top-6 -translate-x-1/2
                                    w-2.5 h-2.5 rounded-full bg-primary
                                    ring-4 ring-background z-10
                                    ${reducedMotion ? "" : "transition-transform duration-300"}
                                    group-hover:bg-primary-hover
                                    ${reducedMotion ? "" : "group-hover:scale-150"}`}
                                />
                                {/*Item content */}
                                <div className={`py-5 pl-4 pr-4 border-b border-border/60
                                    group-hover:bg-white/[0.03]
                                    ${reducedMotion ? "" : "transition-colors duration-300"}
                                    ${idx === activities.length - 1 ? "border-b-0" : ""}`}
                                >
                                    <span className="font-mono text-xs text-primary">{act.period}</span>
                                    <h3 className="font-semibold mt-1 leading-snug">{act.role}</h3>
                                    <p className="text-sm text-muted-foreground mt-0.5">{act.company}</p>
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {act.skills.map((skill, skillIdx) => (
                                            <span key={skillIdx}
                                                className="px-2 py-0.5 bg-primary-muted border border-primary/25
                                                    rounded-md font-mono text-[11px] text-secondary-foreground"
                                            >
                                                {skill.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    </section >
}