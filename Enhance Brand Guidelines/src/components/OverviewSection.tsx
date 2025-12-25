import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Icons = {
  // Linotype slug - representing editorial authority & printing press legacy
  Authority: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="authGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3d4fc9" />
          <stop offset="100%" stopColor="#00d9ff" />
        </linearGradient>
      </defs>
      <rect x="6" y="8" width="20" height="3" fill="url(#authGradient)" opacity="0.8" />
      <rect x="6" y="13" width="20" height="2" fill="url(#authGradient)" opacity="0.6" />
      <rect x="8" y="17" width="16" height="2" fill="url(#authGradient)" opacity="0.6" />
      <rect x="6" y="21" width="14" height="2" fill="url(#authGradient)" opacity="0.5" />
      <path d="M4 6 L28 6 L28 26 L4 26 Z" stroke="url(#authGradient)" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  ),
  // Punch card holes - representing computational precision
  Precision: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="precGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3d4fc9" />
          <stop offset="100%" stopColor="#00d9ff" />
        </linearGradient>
      </defs>
      <rect x="4" y="6" width="24" height="20" stroke="url(#precGradient)" strokeWidth="1.5" fill="none" opacity="0.3" />
      <circle cx="10" cy="11" r="1.5" fill="url(#precGradient)" />
      <circle cx="16" cy="11" r="1.5" fill="url(#precGradient)" />
      <circle cx="22" cy="11" r="1.5" fill="url(#precGradient)" />
      <circle cx="10" cy="16" r="1.5" fill="url(#precGradient)" opacity="0.7" />
      <circle cx="22" cy="16" r="1.5" fill="url(#precGradient)" opacity="0.7" />
      <circle cx="10" cy="21" r="1.5" fill="url(#precGradient)" opacity="0.6" />
      <circle cx="16" cy="21" r="1.5" fill="url(#precGradient)" opacity="0.6" />
    </svg>
  ),
  // Turing tape segment - representing computing history
  History: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="histGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3d4fc9" />
          <stop offset="100%" stopColor="#00d9ff" />
        </linearGradient>
      </defs>
      <rect x="3" y="12" width="26" height="8" stroke="url(#histGradient)" strokeWidth="1.5" fill="none" opacity="0.3" />
      <line x1="9" y1="12" x2="9" y2="20" stroke="url(#histGradient)" strokeWidth="1" opacity="0.5" />
      <line x1="15" y1="12" x2="15" y2="20" stroke="url(#histGradient)" strokeWidth="1" opacity="0.5" />
      <line x1="21" y1="12" x2="21" y2="20" stroke="url(#histGradient)" strokeWidth="1" opacity="0.5" />
      <rect x="11" y="14" width="2" height="4" fill="url(#histGradient)" />
      <rect x="17" y="14" width="2" height="4" fill="url(#histGradient)" opacity="0.7" />
      <circle cx="16" cy="7" r="2" stroke="url(#histGradient)" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line x1="16" y1="9" x2="16" y2="12" stroke="url(#histGradient)" strokeWidth="1.5" opacity="0.5" />
    </svg>
  ),
  // Logic gate (AND) - representing clarity of logic
  Clarity: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="clarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3d4fc9" />
          <stop offset="100%" stopColor="#00d9ff" />
        </linearGradient>
      </defs>
      {/* AND gate shape */}
      <path d="M8 10 L8 22 L16 22 Q24 22 24 16 Q24 10 16 10 Z" stroke="url(#clarGradient)" strokeWidth="1.5" fill="none" opacity="0.8" />
      {/* Input lines */}
      <line x1="4" y1="13" x2="8" y2="13" stroke="url(#clarGradient)" strokeWidth="1.5" opacity="0.6" />
      <line x1="4" y1="19" x2="8" y2="19" stroke="url(#clarGradient)" strokeWidth="1.5" opacity="0.6" />
      {/* Output line */}
      <line x1="24" y1="16" x2="28" y2="16" stroke="url(#clarGradient)" strokeWidth="1.5" />
      {/* Input dots */}
      <circle cx="4" cy="13" r="1.5" fill="url(#clarGradient)" />
      <circle cx="4" cy="19" r="1.5" fill="url(#clarGradient)" />
      {/* Output dot */}
      <circle cx="28" cy="16" r="1.5" fill="url(#clarGradient)" />
    </svg>
  )
};

export function OverviewSection() {
  const principles = [
    {
      icon: Icons.Authority,
      title: 'Editorial Authority',
      description: 'We model ourselves on The Atlantic and The Economist. Long-form analysis, not product announcements. Our typography comes from newspapers, not startups.'
    },
    {
      icon: Icons.Precision,
      title: 'Technical Precision',
      description: 'Every claim cites primary sources. When we discuss GPT-4, we reference the actual architecture. When we analyze markets, we show the data.'
    },
    {
      icon: Icons.History,
      title: 'Historical Grounding',
      description: 'The Jacquard loom automated weaving in 1804. COBOL automated accounting in 1959. LLMs automate writing in 2024. We connect these dots.'
    },
    {
      icon: Icons.Clarity,
      title: 'Radical Clarity',
      description: 'If a sentence could appear in a pitch deck, we delete it. We write for readers who know the difference between hype and consequence.'
    }
  ];

  return (
    <section className="space-y-32">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-4">00 / Overview</p>
          <h1 className="text-5xl font-serif tracking-tight text-[#09090B] mb-8 max-w-4xl">
            Code & Capital
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl text-[#27272A] font-serif">
            A publication on computing, capital, and historical consequence. We analyze how code
            creates leverage, why markets reward technical moats, and what the industrial revolution
            teaches us about machine intelligence.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-[#E4E4E7]">
          <div>
            <p className="text-4xl font-serif mb-2 text-[#09090B]">1</p>
            <p className="text-xs font-mono text-[#71717A] uppercase tracking-widest">Primary Color</p>
          </div>
          <div>
            <p className="text-4xl font-serif mb-2 text-[#09090B]">2</p>
            <p className="text-xs font-mono text-[#71717A] uppercase tracking-widest">Typefaces</p>
          </div>
          <div>
            <p className="text-4xl font-serif mb-2 text-[#09090B]">4px</p>
            <p className="text-xs font-mono text-[#71717A] uppercase tracking-widest">Base Unit</p>
          </div>
          <div>
            <p className="text-4xl font-serif mb-2 text-[#09090B]">AA</p>
            <p className="text-xs font-mono text-[#71717A] uppercase tracking-widest">Accessibility</p>
          </div>
        </div>
      </motion.div>

      {/* Brand Essence */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-12">Brand Essence</h2>
        
        <div className="bg-[#4338CA] text-white p-16 md:p-24">
          <div className="max-w-4xl">
            <p className="text-3xl md:text-4xl italic font-serif mb-16 leading-tight">
              "In 1956, ten men gathered at Dartmouth to invent artificial intelligence.
              In 2024, ten million developers deploy it daily. We write about what happened
              in between—and what happens next."
            </p>
            <div className="grid md:grid-cols-3 gap-16 pt-12 border-t border-white/20">
              <div>
                <p className="text-xs font-mono text-white/60 mb-3 uppercase tracking-widest">Personality</p>
                <p className="text-base font-serif text-white/90">Analytical. Skeptical. Historically grounded.</p>
              </div>
              <div>
                <p className="text-xs font-mono text-white/60 mb-3 uppercase tracking-widest">Voice</p>
                <p className="text-base font-serif text-white/90">Senior correspondent, not startup founder.</p>
              </div>
              <div>
                <p className="text-xs font-mono text-white/60 mb-3 uppercase tracking-widest">Focus</p>
                <p className="text-base font-serif text-white/90">Code. Markets. Precedent.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Design Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-12">Core Pillars</h2>
        
        <div className="grid md:grid-cols-2 gap-px bg-[#E4E4E7] border border-[#E4E4E7]">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-16 hover:bg-[#FAFAFA] transition-colors group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-[#4338CA] mb-8">
                  <Icon />
                </div>
                <h3 className="text-xl font-serif mb-4 text-[#09090B]">{principle.title}</h3>
                <p className="text-base font-serif text-[#71717A] leading-relaxed max-w-sm">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Visual System Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-12">Visual System</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
            <div className="border border-[#E4E4E7] p-12 bg-white">
                <p className="text-xs font-mono text-[#71717A] mb-8 uppercase tracking-widest">Typography</p>
                <p className="text-6xl mb-4 font-serif text-[#09090B]">Aa</p>
                <p className="text-xl font-serif text-[#27272A] mb-4">Adobe Garamond Pro</p>
                <p className="text-base text-[#71717A] font-serif leading-relaxed">
                    Our primary typeface, chosen for its history and readability in long-form text.
                </p>
            </div>
            
            <div className="border border-[#E4E4E7] p-12 bg-white">
                <p className="text-xs font-mono text-[#71717A] mb-8 uppercase tracking-widest">Color</p>
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-[#4338CA]"></div>
                    <div>
                        <p className="text-xl font-serif text-[#09090B]">Electric Indigo</p>
                        <p className="text-sm font-mono text-[#71717A]">#4338CA</p>
                    </div>
                </div>
                <p className="text-base text-[#71717A] font-serif leading-relaxed">
                    A distinctive signal color that cuts through the noise. Used for emphasis and action.
                </p>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
