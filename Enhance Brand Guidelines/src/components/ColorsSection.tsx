import { motion } from 'motion/react';
import { useState } from 'react';
import { Check } from 'lucide-react';

export function ColorsSection() {
  const [copiedColor, setCopiedColor] = useState<string>('');

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(''), 2000);
  };

  const indigoScale = [
    { name: 'Indigo 50', hex: '#EEF2FF', use: 'Subtle backgrounds' },
    { name: 'Indigo 100', hex: '#E0E7FF', use: 'Light backgrounds' },
    { name: 'Indigo 200', hex: '#C7D2FE', use: 'Disabled states' },
    { name: 'Indigo 300', hex: '#A5B4FC', use: 'Subtle accents' },
    { name: 'Indigo 400', hex: '#818CF8', use: 'Hover states' },
    { name: 'Indigo 500', hex: '#6366F1', use: 'Light primary' },
    { name: 'Indigo 600', hex: '#4F46E5', use: 'Interactive' },
    { name: 'Indigo 700', hex: '#4338CA', use: 'PRIMARY BRAND COLOR' },
    { name: 'Indigo 800', hex: '#3730A3', use: 'Hover on primary' },
    { name: 'Indigo 900', hex: '#312E81', use: 'Dark indigo' },
    { name: 'Indigo 950', hex: '#1E1B4B', use: 'Deep shadows' },
  ];

  const neutralScale = [
    { name: 'White', hex: '#FFFFFF', use: 'Primary background' },
    { name: 'Zinc 50', hex: '#FAFAFA', use: 'Subtle backgrounds' },
    { name: 'Zinc 100', hex: '#F4F4F5', use: 'Light grey backgrounds' },
    { name: 'Zinc 200', hex: '#E4E4E7', use: 'Borders, dividers' },
    { name: 'Zinc 300', hex: '#D4D4D8', use: 'Inactive UI elements' },
    { name: 'Zinc 400', hex: '#A1A1AA', use: 'Placeholder text' },
    { name: 'Zinc 500', hex: '#71717A', use: 'Secondary text' },
    { name: 'Zinc 600', hex: '#52525B', use: 'Body text (subtle)' },
    { name: 'Zinc 700', hex: '#3F3F46', use: 'Emphasized text' },
    { name: 'Zinc 800', hex: '#27272A', use: 'Headings, dark text' },
    { name: 'Zinc 900', hex: '#18181B', use: 'Maximum contrast' },
    { name: 'Black', hex: '#09090B', use: 'Pure black' },
  ];

  const semanticColors = [
    { name: 'Success', hex: '#059669', use: 'Status indication only' },
    { name: 'Warning', hex: '#D97706', use: 'Status indication only' },
    { name: 'Error', hex: '#BE123C', use: 'Status indication only' },
  ];

  return (
    <section className="space-y-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-4">03 / Colors</p>
        <h1 className="text-5xl font-serif tracking-tight text-[#09090B] mb-8">Color System</h1>
        <p className="text-lg font-serif leading-relaxed text-[#27272A] max-w-2xl">
          Our palette is intentionally restrained. We rely on a robust neutral scale to handle 
          content hierarchy, reserving Electric Indigo for key interactions and brand signals.
        </p>
      </motion.div>

      {/* Primary Color Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-12">Primary Brand Color</h2>
        
        <div className="bg-[#4338CA] text-white p-16 md:p-32 text-center">
          <p className="text-7xl md:text-9xl mb-8 font-serif">#4338CA</p>
          <p className="text-2xl mb-4 font-serif">Electric Indigo</p>
          <p className="text-sm text-white/60 font-mono">RGB(67, 56, 202) • HSL(245°, 58%, 51%)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="border border-[#E4E4E7] p-8">
            <h4 className="mb-4 font-serif text-lg">Philosophy</h4>
            <p className="text-sm text-[#71717A] leading-relaxed font-serif">
              A shade that sits between the corporate safety of blue and the creative edge of violet. 
              It is our ink.
            </p>
          </div>
          
          <div className="border border-[#E4E4E7] p-8">
            <h4 className="mb-4 font-serif text-lg">Usage</h4>
            <p className="text-sm text-[#71717A] leading-relaxed font-serif">
              Use for primary calls-to-action, links, and selected states. Never use for 
              content backgrounds.
            </p>
          </div>
          
          <div className="border border-[#E4E4E7] p-8">
            <h4 className="mb-4 font-serif text-lg">Accessibility</h4>
            <p className="text-sm text-[#71717A] leading-relaxed font-serif">
              Passes WCAG AA (4.74:1) on white. Legible and distinct.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scales Container */}
      <div className="grid md:grid-cols-2 gap-16">
        {/* Indigo Scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-8">Indigo Scale</h2>
          <div className="space-y-px bg-[#E4E4E7] border border-[#E4E4E7]">
            {indigoScale.map((color, index) => (
              <motion.div
                key={color.hex}
                className="group flex items-center cursor-pointer bg-white hover:z-10 relative"
                onClick={() => copyColor(color.hex)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <div 
                   className="w-16 h-16 flex-shrink-0"
                   style={{ backgroundColor: color.hex }}
                />
                <div className="flex-1 px-6 py-4 flex items-center justify-between group-hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                       <p className="font-serif text-base text-[#09090B]">{color.name}</p>
                       <p className="font-mono text-xs text-[#71717A]">{color.hex}</p>
                    </div>
                    <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">{color.use}</p>
                  </div>
                  {copiedColor === color.hex && <Check className="w-4 h-4 text-[#4338CA]" />}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Neutral Scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-8">Neutral Scale</h2>
          <div className="space-y-px bg-[#E4E4E7] border border-[#E4E4E7]">
            {neutralScale.map((color, index) => (
              <motion.div
                key={color.hex}
                className="group flex items-center cursor-pointer bg-white hover:z-10 relative"
                onClick={() => copyColor(color.hex)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <div 
                   className="w-16 h-16 flex-shrink-0 border-r border-[#E4E4E7]"
                   style={{ backgroundColor: color.hex }}
                />
                <div className="flex-1 px-6 py-4 flex items-center justify-between group-hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                       <p className="font-serif text-base text-[#09090B]">{color.name}</p>
                       <p className="font-mono text-xs text-[#71717A]">{color.hex}</p>
                    </div>
                    <p className="font-mono text-xs text-[#A1A1AA] uppercase tracking-wider">{color.use}</p>
                  </div>
                  {copiedColor === color.hex && <Check className="w-4 h-4 text-[#4338CA]" />}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Semantic Colors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-8">Utility Colors</h2>
        <p className="text-lg font-serif text-[#27272A] mb-12 leading-relaxed max-w-3xl">
          Strictly for UI status (errors, warnings, success states). 
          These are not brand colors and should never be used for creative expression.
        </p>

        <div className="grid md:grid-cols-3 gap-px bg-[#E4E4E7] border border-[#E4E4E7]">
          {semanticColors.map((color) => (
            <div
              key={color.hex}
              className="bg-white p-12 cursor-pointer group hover:bg-[#FAFAFA]"
              onClick={() => copyColor(color.hex)}
            >
              <div
                className="w-12 h-12 rounded-full mb-8"
                style={{ backgroundColor: color.hex }}
              />
              <p className="font-mono text-xs text-[#71717A] mb-2 uppercase tracking-widest">{color.name}</p>
              <p className="font-serif text-xl mb-2 text-[#09090B]">{color.use}</p>
              <p className="font-mono text-xs text-[#A1A1AA]">{color.hex}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Usage Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-[#4338CA] text-white p-16 md:p-24"
      >
        <h2 className="text-3xl font-serif tracking-tight mb-12 text-white">Color Rules</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h4 className="mb-8 font-serif text-xl text-white">Do</h4>
            <ul className="space-y-6 text-base text-white/90 font-serif">
              <li className="flex gap-4">
                <span className="font-mono text-[#A5B4FC] mt-1">01</span>
                <span>Use Electric Indigo for primary actions.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-[#A5B4FC] mt-1">02</span>
                <span>Use neutral blacks and whites for structure.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-[#A5B4FC] mt-1">03</span>
                <span>Ensure text has high contrast ratios.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-8 font-serif text-xl text-white">Don't</h4>
            <ul className="space-y-6 text-base text-white/70 font-serif">
              <li className="flex gap-4">
                <span className="font-mono text-[#A5B4FC] mt-1">01</span>
                <span>Don't use Indigo for backgrounds.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-[#A5B4FC] mt-1">02</span>
                <span>Don't use utility colors for decoration.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-[#A5B4FC] mt-1">03</span>
                <span>Don't create custom tints.</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
