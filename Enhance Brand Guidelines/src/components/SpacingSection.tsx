import { motion } from 'motion/react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

export function SpacingSection() {
  const spacingScale = [
    { name: '1', value: '4px', rem: '0.25rem', use: 'Micro adjustments' },
    { name: '2', value: '8px', rem: '0.5rem', use: 'Tight spacing' },
    { name: '3', value: '12px', rem: '0.75rem', use: 'Compact layouts' },
    { name: '4', value: '16px', rem: '1rem', use: 'Default unit' },
    { name: '5', value: '24px', rem: '1.5rem', use: 'Comfortable' },
    { name: '6', value: '32px', rem: '2rem', use: 'Section spacing' },
    { name: '8', value: '48px', rem: '3rem', use: 'Large gaps' },
    { name: '10', value: '64px', rem: '4rem', use: 'Major sections' },
    { name: '12', value: '96px', rem: '6rem', use: 'Hero spacing' },
    { name: '16', value: '128px', rem: '8rem', use: 'Maximum' },
  ];

  return (
    <section className="space-y-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-4">05 / Spacing</p>
        <h1 className="text-5xl font-serif tracking-tight text-[#09090B] mb-8">Spacing System</h1>
        <p className="text-lg font-serif leading-relaxed text-[#27272A] max-w-2xl">
          Our spacing is mathematical, not arbitrary. Based on a 4px baseline, it creates a 
          predictable rhythm that allows the content to breathe.
        </p>
      </motion.div>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[#4338CA] text-white p-16 md:p-24"
      >
        <h2 className="text-3xl font-serif tracking-tight text-white mb-8">The 4px Base Unit</h2>
        <p className="text-lg text-white/90 leading-relaxed mb-12 font-serif max-w-2xl">
          Every margin, padding, and gap is a multiple of 4. This ensures visual harmony across all screens.
        </p>
        <div className="grid md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
          <div>
            <p className="text-xs font-mono text-white/60 mb-3 uppercase tracking-widest">Rational</p>
            <p className="text-base text-white/90 font-serif">
              Divisible by most screen densities.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-white/60 mb-3 uppercase tracking-widest">Cognitive Load</p>
            <p className="text-base text-white/90 font-serif">
              Simple calculations reduce design decisions.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-white/60 mb-3 uppercase tracking-widest">Rhythm</p>
            <p className="text-base text-white/90 font-serif">
              Creates a consistent vertical cadence.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Spacing Scale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-12">Spacing Scale</h2>
        
        <div className="border border-[#E4E4E7]">
          {spacingScale.map((spacing, index) => (
            <motion.div
              key={spacing.name}
              className="border-b border-[#E4E4E7] last:border-b-0 p-8 hover:bg-gray-50 transition-colors"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="grid md:grid-cols-[100px_100px_1fr_120px] gap-8 items-center">
                <div>
                  <p className="text-xs font-mono text-[#71717A] uppercase tracking-widest mb-2">Scale</p>
                  <p className="text-2xl font-serif text-[#09090B]">{spacing.name}</p>
                </div>
                
                <div>
                  <p className="text-xs font-mono text-[#71717A] uppercase tracking-widest mb-2">Pixels</p>
                  <p className="font-mono text-base text-[#09090B]">{spacing.value}</p>
                </div>
                
                <div>
                  <p className="text-xs font-mono text-[#71717A] uppercase tracking-widest mb-2">Use</p>
                  <p className="text-base text-[#27272A] font-serif">{spacing.use}</p>
                </div>
                
                <div className="flex justify-end">
                  <div
                    className="bg-[#4338CA]"
                    style={{
                      width: spacing.value,
                      height: spacing.value,
                      maxWidth: '100%',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Visual Examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-12">Application</h2>
        
        <div className="space-y-16">
          {/* Stack Spacing */}
          <div>
            <h3 className="text-xl font-serif mb-8 text-[#09090B]">Vertical Rhythm</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { gap: '8px', label: 'Tight (2)', content: 'List items' },
                { gap: '16px', label: 'Default (4)', content: 'Form inputs' },
                { gap: '32px', label: 'Spacious (6)', content: 'Sections' },
              ].map((example) => (
                <div key={example.gap} className="border border-[#E4E4E7] p-8">
                  <p className="text-xs font-mono text-[#71717A] mb-6 uppercase tracking-widest">{example.label}</p>
                  <div className="flex flex-col" style={{ gap: example.gap }}>
                    <div className="h-10 bg-gray-100 border border-gray-200"></div>
                    <div className="h-10 bg-gray-100 border border-gray-200"></div>
                    <div className="h-10 bg-gray-100 border border-gray-200"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Component Spacing */}
          <div>
            <h3 className="text-xl font-serif mb-8 text-[#09090B]">Internal Padding</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border border-[#E4E4E7] shadow-none rounded-none">
                <div className="p-6 border-b border-[#E4E4E7] bg-gray-50">
                  <p className="text-xs font-mono text-[#71717A] uppercase tracking-widest">Compact (16px)</p>
                </div>
                <CardContent className="p-6 pt-6">
                  <h4 className="mb-3 font-semibold font-sans">Data View</h4>
                  <p className="text-sm text-[#71717A] font-serif leading-relaxed">
                    Compact spacing is ideal for data-dense interfaces or utility components.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-[#E4E4E7] shadow-none rounded-none">
                <div className="p-10 border-b border-[#E4E4E7] bg-gray-50">
                  <p className="text-xs font-mono text-[#71717A] uppercase tracking-widest">Comfortable (32px)</p>
                </div>
                <CardContent className="p-10 pt-10">
                  <h4 className="mb-4 text-2xl font-serif">Editorial View</h4>
                  <p className="text-lg text-[#71717A] leading-relaxed font-serif">
                    Comfortable spacing lets the content breathe, mimicking the experience of a 
                    printed page.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
