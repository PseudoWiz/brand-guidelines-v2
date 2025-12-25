import { motion } from 'motion/react';

export function TypographySection() {
  return (
    <section className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono tracking-wider text-[#71717A] mb-4">04 / TYPOGRAPHY</p>
        <h1 className="mb-6">Typography System</h1>
        <p className="text-lg leading-relaxed max-w-3xl text-[#27272A]">
          Typography is our primary design tool. Two carefully chosen typefaces create a 
          tension between editorial refinement and technical precision.
        </p>
      </motion.div>

      {/* Typeface Overview */}
      <div className="grid md:grid-cols-2 gap-1 bg-[#09090B] p-1">
        <motion.div
          className="bg-white p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-7xl mb-8" style={{ fontFamily: "'EB Garamond', serif" }}>Aa</p>
          <h2 className="mb-4">Adobe Garamond Pro</h2>
          <p className="text-sm text-[#71717A] mb-6 leading-relaxed">
            Our primary typeface. A digital revival of Claude Garamond's 16th-century designs, 
            refined by Adobe for modern use. Elegant, readable, timeless.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-[#E4E4E7] pb-2">
              <span className="text-[#71717A]">Classification</span>
              <span>Old-style serif</span>
            </div>
            <div className="flex justify-between border-b border-[#E4E4E7] pb-2">
              <span className="text-[#71717A]">Weights Used</span>
              <span>300, 400, 600</span>
            </div>
            <div className="flex justify-between border-b border-[#E4E4E7] pb-2">
              <span className="text-[#71717A]">Primary Use</span>
              <span>Headings, body text</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-[#71717A]">Fallback</span>
              <span className="font-mono text-xs">Garamond, serif</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-[#09090B] text-white p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-7xl mb-8 font-mono">Aa</p>
          <h2 className="mb-4 text-white">IBM Plex Mono</h2>
          <p className="text-sm text-white/70 mb-6 leading-relaxed">
            Our monospace typeface. Designed by IBM for code editors and technical documentation. 
            Every character occupies equal width—perfect for labels, UI, and data.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span className="text-white/60">Classification</span>
              <span className="text-white">Monospace</span>
            </div>
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span className="text-white/60">Weights Used</span>
              <span className="text-white">400, 500, 600</span>
            </div>
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span className="text-white/60">Primary Use</span>
              <span className="text-white">Labels, UI, code</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="text-white/60">Fallback</span>
              <span className="font-mono text-xs text-white">Menlo, monospace</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Type Scale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="mb-8">Type Scale</h2>
        <p className="text-[#27272A] mb-8 leading-relaxed max-w-3xl">
          Our scale creates clear hierarchy while maintaining proportional relationships. 
          Each size has a specific purpose in our design system.
        </p>

        <div className="border border-[#E4E4E7] divide-y divide-[#E4E4E7]">
          {[
            { name: 'Display', size: 'text-6xl md:text-7xl', px: '56-72px', use: 'Hero sections, landing pages' },
            { name: 'H1', size: 'text-5xl md:text-6xl', px: '48-56px', use: 'Page titles' },
            { name: 'H2', size: 'text-4xl md:text-5xl', px: '36-40px', use: 'Section headings' },
            { name: 'H3', size: 'text-2xl md:text-3xl', px: '24-28px', use: 'Subsection headings' },
            { name: 'H4', size: 'text-xl md:text-2xl', px: '20-22px', use: 'Card titles' },
            { name: 'H5', size: 'text-lg', px: '18px', use: 'Small headings' },
            { name: 'Body Large', size: 'text-lg', px: '18px', use: 'Intro paragraphs' },
            { name: 'Body', size: 'text-base', px: '16px', use: 'Default body text' },
            { name: 'Body Small', size: 'text-sm', px: '14px', use: 'Captions, metadata' },
            { name: 'Label', size: 'text-xs', px: '12px', use: 'Labels, tags' },
          ].map((type) => (
            <div key={type.name} className="p-6 md:p-8 hover:bg-gray-50 transition-colors">
              <div className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
                <div>
                  <p className="text-xs font-mono text-[#71717A] mb-1">{type.name.toUpperCase()}</p>
                  <p className="text-xs text-[#71717A]">{type.px}</p>
                </div>
                <div>
                  <p className={type.size}>
                    Design is intelligence made visible.
                  </p>
                  <p className="text-xs text-[#71717A] mt-2">{type.use}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Line Height & Spacing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="mb-8">Line Height & Letter Spacing</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-[#E4E4E7] p-8">
            <h3 className="mb-6">Headings</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-mono text-[#71717A] mb-2">LINE HEIGHT</p>
                <p className="text-sm">1.1 - 1.3 (Tight)</p>
                <p className="text-xs text-[#71717A] mt-1">Maximizes impact, creates density</p>
              </div>
              <div>
                <p className="text-xs font-mono text-[#71717A] mb-2">LETTER SPACING</p>
                <p className="text-sm">-0.02em (Slightly negative)</p>
                <p className="text-xs text-[#71717A] mt-1">Optical refinement for larger sizes</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#E4E4E7]">
              <h4 style={{ lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Example Heading<br />With Proper Settings
              </h4>
            </div>
          </div>

          <div className="border border-[#E4E4E7] p-8">
            <h3 className="mb-6">Body Text</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-mono text-[#71717A] mb-2">LINE HEIGHT</p>
                <p className="text-sm">1.6 - 1.8 (Relaxed)</p>
                <p className="text-xs text-[#71717A] mt-1">Optimizes readability, creates flow</p>
              </div>
              <div>
                <p className="text-xs font-mono text-[#71717A] mb-2">LETTER SPACING</p>
                <p className="text-sm">0em (Normal)</p>
                <p className="text-xs text-[#71717A] mt-1">Default spacing for body sizes</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#E4E4E7]">
              <p className="text-sm" style={{ lineHeight: 1.7 }}>
                Example body text showing proper line height for comfortable reading across 
                multiple lines. Notice the generous spacing that guides the eye naturally.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Font Pairing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-gray-50 p-12"
      >
        <h2 className="mb-8">Font Pairing Examples</h2>
        
        <div className="space-y-12">
          {/* Example 1 */}
          <div className="bg-white p-8 md:p-12 border border-[#E4E4E7]">
            <p className="text-xs font-mono text-[#71717A] mb-6">ARTICLE LAYOUT</p>
            <h2 className="mb-4">How Software Ate Semiconductors</h2>
            <p className="text-xs font-mono text-[#71717A] mb-6">PUBLISHED DEC 24, 2024 • 12 MIN READ</p>
            <p className="text-lg leading-relaxed text-[#27272A]">
              In 1968, Robert Noyce and Gordon Moore founded Intel to build memory chips. By 1971, they'd
              invented the microprocessor by accident. Fifty years later, Jensen Huang's NVIDIA controls
              AI compute because they bet on parallel processing when Intel bet on clock speed. Markets
              punish yesterday's architecture.
            </p>
          </div>

          {/* Example 2 */}
          <div className="bg-[#09090B] text-white p-8 md:p-12">
            <p className="text-xs font-mono text-white/60 mb-6">TECHNICAL DOCUMENTATION</p>
            <h3 className="mb-4 text-white">Implementation Guide</h3>
            <p className="font-mono text-sm text-white/80 mb-6">
              npm install @codecapital/design-system
            </p>
            <p className="leading-relaxed text-white/90">
              Our design system is built as a collection of React components with full TypeScript 
              support. Import only what you need to keep bundle sizes minimal.
            </p>
          </div>

          {/* Example 3 */}
          <div className="bg-white p-8 md:p-12 border-l-4 border-[#4338CA]">
            <p className="text-xs font-mono text-[#71717A] mb-2">HISTORICAL PARALLEL</p>
            <p className="text-2xl italic mb-4 leading-tight">
              "IBM spent the 1960s building mainframes for institutions. Apple spent the 1970s building
              microcomputers for individuals. By 1981, IBM had to copy Apple's architecture just to compete.
              Platforms eat product lines."
            </p>
            <p className="text-sm text-[#71717A]">— From "How Markets Price Technical Debt," Issue 7</p>
          </div>
        </div>
      </motion.div>

      {/* Best Practices */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-[#4338CA] text-white p-12"
      >
        <h2 className="mb-8 text-white">Typography Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="mb-4 text-white">Hierarchy</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex gap-3">
                <span className="flex-shrink-0">•</span>
                <span>Use only one H1 per page for SEO and accessibility</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">•</span>
                <span>Don't skip heading levels (H1 → H3 is wrong)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">•</span>
                <span>Maintain consistent scale relationships</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">•</span>
                <span>Use font weight to create emphasis, not size alone</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Readability</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex gap-3">
                <span className="flex-shrink-0">•</span>
                <span>Optimal line length: 45-75 characters</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">•</span>
                <span>Increase line height for longer paragraphs</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">•</span>
                <span>Use proper punctuation (em dashes, smart quotes)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">•</span>
                <span>Test text at actual size, not zoomed in</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
