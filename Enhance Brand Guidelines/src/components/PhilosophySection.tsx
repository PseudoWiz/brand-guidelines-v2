import { motion } from 'motion/react';

const Icons = {
  Editorial: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18" />
      <path d="M2 2l7.5 8.6" />
    </svg>
  ),
  Precision: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M7 8l-4 4 4 4" />
      <path d="M17 8l4 4-4 4" />
      <path d="M14 4v16" />
    </svg>
  ),
  History: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20" />
      <path d="M12 6a9 9 0 0 0-9 9" />
      <path d="M12 6a9 9 0 0 1 9 9" />
      <path d="M3 15h18" />
    </svg>
  ),
  Clarity: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  )
};

export function PhilosophySection() {
  return (
    <section className="space-y-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-4">01 / Philosophy</p>
        <h1 className="text-5xl font-serif tracking-tight text-[#09090B] mb-8">Editorial Mission</h1>
        <div className="max-w-3xl space-y-8">
          <p className="text-2xl font-serif leading-tight text-[#09090B]">
            We explain how computing changes the world, and what it changes in us.
          </p>
          <p className="text-lg font-serif text-[#27272A] leading-relaxed">
            Code & Capital is a publication dedicated to the history and future of technology. 
            We treat AI as a civilisational shift, not a product cycle. We use history to make 
            sense of what is arriving next.
          </p>
        </div>
      </motion.div>

      {/* Definition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="border-t border-b border-[#E4E4E7] py-24"
      >
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-2xl font-serif text-[#09090B] mb-6">On "Code"</h2>
            <p className="text-lg font-serif text-[#27272A] leading-relaxed">
              The language of modern power. It is the lever by which small teams move 
              entire industries. It requires precision, logic, and structure.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-serif text-[#09090B] mb-6">On "Capital"</h2>
            <p className="text-lg font-serif text-[#27272A] leading-relaxed">
              Not just money, but leverage. The accumulation of value, influence, and 
              capability. When code scales, it becomes capital.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Design Restraint Rules */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-12">Design Restraint</h2>
        <div className="bg-[#09090B] text-white p-16 md:p-24">
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
            <div className="group">
              <p className="font-mono text-[#4338CA] text-xs mb-4 tracking-widest">RULE 01</p>
              <h3 className="text-xl font-serif mb-4 text-white group-hover:text-[#4338CA] transition-colors">Let typography do the work</h3>
              <p className="text-white/70 leading-relaxed font-serif text-lg">
                We are a reading experience first. Type hierarchy, line length, and whitespace 
                should guide the reader. Avoid decorative elements that do not serve the text.
              </p>
            </div>

            <div className="group">
              <p className="font-mono text-[#4338CA] text-xs mb-4 tracking-widest">RULE 02</p>
              <h3 className="text-xl font-serif mb-4 text-white group-hover:text-[#4338CA] transition-colors">Use colour sparingly</h3>
              <p className="text-white/70 leading-relaxed font-serif text-lg">
                Electric Indigo is our signal, not our background. Use it to direct attention 
                to what matters. 90% of our interface should be black, white, or grey.
              </p>
            </div>

            <div className="group">
              <p className="font-mono text-[#4338CA] text-xs mb-4 tracking-widest">RULE 03</p>
              <h3 className="text-xl font-serif mb-4 text-white group-hover:text-[#4338CA] transition-colors">Prioritise readability</h3>
              <p className="text-white/70 leading-relaxed font-serif text-lg">
                Contrast ratios must be high. Font sizes must be generous. If it cannot be 
                read comfortably, it is not "Code & Capital".
              </p>
            </div>

            <div className="group">
              <p className="font-mono text-[#4338CA] text-xs mb-4 tracking-widest">RULE 04</p>
              <h3 className="text-xl font-serif mb-4 text-white group-hover:text-[#4338CA] transition-colors">Favour structure over decoration</h3>
              <p className="text-white/70 leading-relaxed font-serif text-lg">
                Our grid is rigid. Our spacing is mathematical. We trust in the elegance of 
                structure rather than applied ornamentation.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tone & Voice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-12">Voice & Tone</h2>
        <div className="border border-[#E4E4E7] p-16 bg-white">
          <div className="max-w-3xl space-y-12">
            <p className="text-xl font-serif text-[#27272A] leading-relaxed">
              Our voice is that of an editor-in-chief: knowledgeable but not arrogant, 
              clear but not simplistic. We avoid tech jargon unless necessary, and we 
              never use "marketing speak".
            </p>
            
            <div className="grid md:grid-cols-2 gap-16 pt-12 border-t border-[#E4E4E7]">
              <div>
                <p className="text-xs font-mono text-[#71717A] mb-6 uppercase tracking-widest">Sound Like This</p>
                <ul className="space-y-6">
                  <li className="flex gap-4 text-base font-serif text-[#27272A]">
                    <span className="text-[#4338CA] mt-1">✓</span>
                    <span>"AI is a civilisational shift."</span>
                  </li>
                  <li className="flex gap-4 text-base font-serif text-[#27272A]">
                    <span className="text-[#4338CA] mt-1">✓</span>
                    <span>"Code creates leverage."</span>
                  </li>
                  <li className="flex gap-4 text-base font-serif text-[#27272A]">
                    <span className="text-[#4338CA] mt-1">✓</span>
                    <span>"History suggests a different outcome."</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <p className="text-xs font-mono text-[#71717A] mb-6 uppercase tracking-widest">Not Like This</p>
                <ul className="space-y-6">
                  <li className="flex gap-4 text-base font-serif text-[#71717A]">
                    <span className="text-[#DC2626] mt-1">✗</span>
                    <span>"Unlock infinite possibilities with AI."</span>
                  </li>
                  <li className="flex gap-4 text-base font-serif text-[#71717A]">
                    <span className="text-[#DC2626] mt-1">✗</span>
                    <span>"Supercharge your workflow."</span>
                  </li>
                  <li className="flex gap-4 text-base font-serif text-[#71717A]">
                    <span className="text-[#DC2626] mt-1">✗</span>
                    <span>"Join the revolution today."</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
