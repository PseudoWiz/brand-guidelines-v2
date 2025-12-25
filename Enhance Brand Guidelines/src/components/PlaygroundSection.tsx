import { motion } from 'motion/react';
import { useState } from 'react';

export function PlaygroundSection() {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#09090B');
  const [accentColor, setAccentColor] = useState('#4338CA');
  const [fontSize, setFontSize] = useState('18');
  const [spacing, setSpacing] = useState('160');

  const presets = [
    { name: 'Default', bg: '#FFFFFF', text: '#09090B', accent: '#4338CA' },
    { name: 'Dark Mode', bg: '#09090B', text: '#FFFFFF', accent: '#6366F1' },
    { name: 'Indigo', bg: '#4338CA', text: '#FFFFFF', accent: '#E0E7FF' },
    { name: 'Minimal', bg: '#FAFAFA', text: '#27272A', accent: '#4338CA' },
  ];

  return (
    <section className="space-y-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-4">08 / Playground</p>
        <h1 className="text-5xl font-serif tracking-tight text-[#09090B] mb-8">Design Playground</h1>
        <p className="text-lg font-serif leading-relaxed text-[#27272A] max-w-2xl">
          Test the limits of the system. Our guidelines are strict, but they allow for 
          expressive variation within the rules.
        </p>
      </motion.div>

      {/* Color Playground */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="border border-[#E4E4E7]"
      >
        <div className="p-12 border-b border-[#E4E4E7] bg-gray-50">
          <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-8">Color Context</h2>
          
          <div className="space-y-8">
            {/* Color Controls */}
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <label className="block text-xs font-mono text-[#27272A] mb-3 uppercase tracking-widest">Background</label>
                <div className="flex gap-4">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-12 h-12 border border-[#E4E4E7] cursor-pointer p-1 bg-white"
                  />
                  <input
                    type="text"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="flex-1 px-4 border border-[#E4E4E7] bg-white font-mono text-sm focus:outline-none focus:ring-1 focus:ring-[#4338CA]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#27272A] mb-3 uppercase tracking-widest">Text</label>
                <div className="flex gap-4">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="w-12 h-12 border border-[#E4E4E7] cursor-pointer p-1 bg-white"
                  />
                  <input
                    type="text"
                    value={textColor}
                    onChange={(e) => setTextColor(e.target.value)}
                    className="flex-1 px-4 border border-[#E4E4E7] bg-white font-mono text-sm focus:outline-none focus:ring-1 focus:ring-[#4338CA]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#27272A] mb-3 uppercase tracking-widest">Accent</label>
                <div className="flex gap-4">
                  <input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-12 h-12 border border-[#E4E4E7] cursor-pointer p-1 bg-white"
                  />
                  <input
                    type="text"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="flex-1 px-4 border border-[#E4E4E7] bg-white font-mono text-sm focus:outline-none focus:ring-1 focus:ring-[#4338CA]"
                  />
                </div>
              </div>
            </div>

            {/* Presets */}
            <div className="pt-4">
              <p className="text-xs font-mono text-[#71717A] mb-4 uppercase tracking-widest">Quick Presets</p>
              <div className="flex flex-wrap gap-4">
                {presets.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => {
                      setBgColor(preset.bg);
                      setTextColor(preset.text);
                      setAccentColor(preset.accent);
                    }}
                    className="px-6 py-3 border border-[#E4E4E7] hover:border-[#4338CA] text-sm font-mono transition-colors bg-white uppercase tracking-wider"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div 
          className="p-16 md:p-32 transition-all duration-300 min-h-[500px] flex items-center justify-center"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <div className="max-w-3xl mx-auto w-full">
            <div className="border-b mb-12 pb-4" style={{ borderColor: `${textColor}20` }}>
               <div className="flex justify-between items-end">
                  <p className="text-xs font-mono uppercase tracking-widest opacity-60">
                     Issue 04
                  </p>
                  <p className="text-xs font-mono uppercase tracking-widest opacity-60">
                     October 2025
                  </p>
               </div>
            </div>
            
            <h1 className="mb-8 font-serif leading-[0.95] tracking-tight" style={{ fontSize: '4.5rem' }}>
              The History of <span style={{ color: accentColor }}>Computation</span>
            </h1>
            
            <p className="text-2xl mb-16 leading-relaxed font-serif opacity-90 max-w-xl">
              How the loom became the logic gate. A deep dive into the industrial origins 
              of the information age.
            </p>

            <div className="flex flex-wrap gap-8">
              <button 
                className="px-10 py-5 font-mono text-xs uppercase tracking-widest transition-all hover:opacity-90"
                style={{ 
                  backgroundColor: accentColor, 
                  color: bgColor,
                }}
              >
                Read Essay
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Typography Playground */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border border-[#E4E4E7]"
      >
        <div className="p-12 border-b border-[#E4E4E7] bg-gray-50">
          <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-8">Typesetting</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <label className="block text-xs font-mono text-[#27272A] mb-3 uppercase tracking-widest">Font Size (px)</label>
              <input
                type="range"
                min="16"
                max="28"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="w-full accent-[#4338CA] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-sm font-mono text-[#71717A] mt-3">{fontSize}px</p>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#27272A] mb-3 uppercase tracking-widest">Line Height</label>
              <input
                type="range"
                min="120"
                max="200"
                value={spacing}
                onChange={(e) => setSpacing(e.target.value)}
                className="w-full accent-[#4338CA] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-sm font-mono text-[#71717A] mt-3">{(parseInt(spacing) / 100).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="p-16 md:p-32 bg-white">
          <div className="max-w-2xl mx-auto space-y-16">
            <div>
              <p className="text-xs font-mono text-[#71717A] mb-6 uppercase tracking-widest">Heading 1</p>
              <h1 className="font-serif text-[#09090B] tracking-tight" style={{ 
                fontSize: `${parseInt(fontSize) * 2.5}px`, 
                lineHeight: 1,
                marginBottom: '0'
              }}>
                The Algorithmic State
              </h1>
            </div>

            <div>
              <p className="text-xs font-mono text-[#71717A] mb-6 uppercase tracking-widest">Body Text</p>
              <p className="font-serif text-[#27272A]" style={{ 
                fontSize: `${fontSize}px`, 
                lineHeight: parseInt(spacing) / 100,
                marginBottom: '0'
              }}>
                Typography is the voice of the publication. Ideally, it should be transparent 
                to the reader. When type is set correctly, the reader is not aware they are reading—they 
                are simply absorbing ideas. The moment the reader notices the font, the spell is broken.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
