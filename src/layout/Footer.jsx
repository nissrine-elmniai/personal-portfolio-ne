import { Github, Linkedin, Palette } from "lucide-react";
import { LiveClock } from '@/components/footer/LiveClock';
import { Waveform } from '@/components/footer/Waveform';
import { TerminalSignature } from '@/components/footer/TerminalSignature';
import { MadeWithLove } from '@/components/footer/MadeWithLove';
import { VisitorCounter } from '@/components/footer/VisitorCounter';
import { KonamiEasterEgg } from '@/components/footer/KonamiEasterEgg';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const socialLinks = [
    { icon: Github, href: "https://github.com/nissrine-elmniai", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nissrine-el-mniai-0b3a28296/?locale=en", label: "LinkedIn" },
];

export const Footer = ({ onOpenDS }) => {
    const currentYear = new Date().getFullYear();
    const reduced = useReducedMotion();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    };

    return (
        <>
            <KonamiEasterEgg />
            <footer className="py-12 relative">
                <div className="container mx-auto px-6 space-y-10">
                    <div className="max-w-lg mx-auto">
                        <TerminalSignature />
                    </div>

                    {/* Bottom line : centre + socials */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-sm text-muted-foreground">
                            <LiveClock />
                        </div>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <div className="text-center md:text-right">
                            <a href="#" className="text-xl font-bold tracking-tight">
                                NM<span className="text-primary">.</span>
                            </a>
                            <p className="text-xs text-muted-foreground mt-0.25">
                                © {currentYear} All rights reserved.
                            </p>
                        </div>
                    </div>

                    <MadeWithLove />

                </div>
                <button
                    onClick={onOpenDS}
                    className="absolute bottom-4 right-4 p-2 rounded-full glass opacity-50 hover:opacity-100 hover:text-primary transition-all text-xs"
                    aria-label="Design System"
                    title="Design System"
                >
                    <Palette className="w-4 h-4" />
                </button>
            </footer>
        </>
    );
};