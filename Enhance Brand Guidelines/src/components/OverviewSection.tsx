import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Icons = {
  Authority: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6C4 4.89543 4.89543 4 6 4H26C27.1046 4 28 4.89543 28 6V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V6Z" />
      <path d="M8 10H24" />
      <path d="M8 16H24" />
      <path d="M8 22H16" />
    </svg>
  ),
  Precision: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 10L2 16L6 22" />
      <path d="M26 10L30 16L26 22" />
      <path d="M12 24L20 8" />
    </svg>
  ),
  History: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="16" cy="16" r="12" />
      <path d="M16 8V16L20 20" />
    </svg>
  ),
  Clarity: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 4V8" />
      <path d="M16 24V28" />
      <path d="M4 16H8" />
      <path d="M24 16H28" />
      <rect x="11" y="11" width="10" height="10" />
    </svg>
  )
};

export function OverviewSection() {
  const principles = [
    {
      icon: Icons.Authority,
      title: 'Editorial Authority',
      description: 'We are a publication first. Content is king. Typography and layout serve the reading experience.'
    },
    {
      icon: Icons.Precision,
      title: 'Technical Precision',
      description: 'Our subject matter is code and computing. Our design reflects the logic and structure of software.'
    },
    {
      icon: Icons.History,
      title: 'Historical Context',
      description: 'We view technology through the lens of history. Our aesthetic borrows from classic print traditions.'
    },
    {
      icon: Icons.Clarity,
      title: 'Radical Clarity',
      description: 'No marketing fluff. No decorative noise. Just the signal, presented with maximum legibility.'
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
            The design system for a publication focused on AI, computing, and historical leverage. 
            We combine the authority of print journalism with the precision of code.
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
              "We treat AI as a civilisational technology, not a product cycle. Our design 
              must communicate permanence, depth, and clarity."
            </p>
            <div className="grid md:grid-cols-3 gap-16 pt-12 border-t border-white/20">
              <div>
                <p className="text-xs font-mono text-white/60 mb-3 uppercase tracking-widest">Personality</p>
                <p className="text-base font-serif text-white/90">Serious. Informed. Timeless.</p>
              </div>
              <div>
                <p className="text-xs font-mono text-white/60 mb-3 uppercase tracking-widest">Voice</p>
                <p className="text-base font-serif text-white/90">The Editor-in-Chief.</p>
              </div>
              <div>
                <p className="text-xs font-mono text-white/60 mb-3 uppercase tracking-widest">Focus</p>
                <p className="text-base font-serif text-white/90">Systems. History. Power.</p>
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
