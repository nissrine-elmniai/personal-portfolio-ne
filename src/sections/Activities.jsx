
const activities = [
    {
        period: "July 2025 - Present",
        role: "President",
        company: "Altruism Club at ENSAO",
        skills: ["Leadership ", "Time Management", "Event Organization", "Meeting Facilitation", "Conflict Resolution", "Decision Making"],
        current: true,
    },
    {
        period: "July 2024 - Juin 2025",
        role: "Secretary General",
        company: "Altruism Club at ENSAO",
        skills: ["Leadership ", "Time Management", "Event Organization", "Communication", "Team Coordination"],
        current: false,
    },
    {
        period: "October 2023 - Juin 2024",
        role: "Member",
        company: "Altruism Club at ENSAO",
        skills: ["Team Work ", "Discipline", "Event Organization", "Design"],
        current: false,
    },
];
export const Activities = () => {
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
                        shape my perspective.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in
        animation-delay-200">
                    A glimpse into my extracurricular journey.
                </p>
            </div>

            {/* Timeline*/}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32, 178, 166, 0.8)]" />
                {/*Experience Items */}
                <div className="space-y-12">
                    {activities.map((act, idx) => (
                        <div key={idx}
                            className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 150}ms` }}

                        >
                            {/*Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                {act.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                            </div>
                            { /*Content */}
                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ?
                                "md:pr-16 md:text-right"
                                : "md:col-start-2 md:pl-16"}`}>
                                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                    <span className="text-sm text-primary font-medium">{act.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{act.role}</h3>
                                    <p className="text-muted-foreground">{act.company}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                                        }`}>
                                        {act.skills.map((skill, skillIdx) => (
                                            <span key={skillIdx}
                                                className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">
                                                {skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section >
}
