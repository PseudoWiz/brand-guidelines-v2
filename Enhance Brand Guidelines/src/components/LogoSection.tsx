import { useState } from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { 
  Logo, 
  LogoMark, 
  LogoMarkConcept1, 
  LogoMarkConcept2, 
  LogoMarkConcept3, 
  LogoMarkConcept4, 
  LogoMarkConcept5, 
  LogoMarkConcept6,
  LogoFavicon 
} from './Logo';

export function LogoSection() {
  const [copiedText, setCopiedText] = useState<string>('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <section className="space-y-32">
      {/* Header */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-4">02 / Identity</p>
          <h1 className="text-5xl font-serif tracking-tight text-[#09090B] mb-8">The Masthead</h1>
          <p className="text-lg font-serif leading-relaxed text-[#27272A] max-w-2xl">
            Our logo is a stamp of editorial authority. It represents the intersection of technical precision and historical leverage. We treat it with the respect of a centuries-old publishing house.
          </p>
        </motion.div>
      </div>

      {/* Primary Logo Lockup */}
      <div className="border-t border-[#E4E4E7] pt-16">
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-8">Primary Lockup</h2>
        <motion.div
          className="border border-[#E4E4E7] bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="p-32 flex items-center justify-center bg-white">
            <Logo variant="primary" size="xl" showTagline />
          </div>
          <div className="border-t border-[#E4E4E7] p-8 bg-[#FAFAFA]">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-3">Typeface</p>
                <p className="text-base font-serif text-[#09090B]">Adobe Garamond Pro</p>
                <p className="text-sm font-mono text-[#71717A] mt-1">Semibold / Light Italic</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-3">Tagline</p>
                <p className="text-base font-serif text-[#09090B]">IBM Plex Mono</p>
                <p className="text-sm font-mono text-[#71717A] mt-1">Uppercase / Tracking 0.1em</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-3">Refinement</p>
                <p className="text-base font-serif text-[#09090B]">Optical Kerning</p>
                <p className="text-sm font-mono text-[#71717A] mt-1">Tight Wordmark / Open Tagline</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Clear Space */}
      <div className="border-t border-[#E4E4E7] pt-16">
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-8">Clear Space</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white border border-[#E4E4E7] p-16 flex items-center justify-center relative overflow-hidden">
             {/* SVG Clear Space Diagram */}
             <svg width="400" height="300" viewBox="0 0 400 300" className="w-full h-auto">
                <defs>
                   <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E4E4E7" strokeWidth="1"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
                
                {/* Logo Placeholder */}
                <text x="200" y="150" textAnchor="middle" dominantBaseline="middle" fontFamily="serif" fontSize="40" fontWeight="600" fill="#09090B">
                   Code & Capital
                </text>
                
                {/* Guides - C Height approx 40px here */}
                {/* Top Line */}
                <line x1="100" y1="110" x2="300" y2="110" stroke="#4338CA" strokeWidth="1" strokeDasharray="4 4" />
                {/* Bottom Line */}
                <line x1="100" y1="190" x2="300" y2="190" stroke="#4338CA" strokeWidth="1" strokeDasharray="4 4" />
                {/* Left Line */}
                <line x1="60" y1="130" x2="60" y2="170" stroke="#4338CA" strokeWidth="1" strokeDasharray="4 4" />
                {/* Right Line */}
                <line x1="340" y1="130" x2="340" y2="170" stroke="#4338CA" strokeWidth="1" strokeDasharray="4 4" />

                {/* Dimension Markers */}
                <path d="M 200 130 V 110" stroke="#4338CA" strokeWidth="1" />
                <text x="210" y="125" fill="#4338CA" fontSize="10" fontFamily="monospace">1C</text>

                <path d="M 200 170 V 190" stroke="#4338CA" strokeWidth="1" />
                <text x="210" y="185" fill="#4338CA" fontSize="10" fontFamily="monospace">1C</text>
                
                <path d="M 80 150 H 60" stroke="#4338CA" strokeWidth="1" />
                <text x="65" y="145" fill="#4338CA" fontSize="10" fontFamily="monospace">1C</text>
                
                <path d="M 320 150 H 340" stroke="#4338CA" strokeWidth="1" />
                <text x="325" y="145" fill="#4338CA" fontSize="10" fontFamily="monospace">1C</text>

             </svg>
          </div>
          <div>
            <h3 className="text-xl font-serif text-[#09090B] mb-4">The "C" Rule</h3>
            <p className="text-lg font-serif leading-relaxed text-[#27272A] mb-6">
              The clear space is defined by the height of the capital "C". This zone must remain free of any other graphic elements, text, or borderlines.
            </p>
            <ul className="space-y-4">
               <li className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-[#E0E7FF] text-[#4338CA] flex items-center justify-center text-xs font-mono">01</div>
                  <p className="text-sm font-mono text-[#71717A]">NEVER OVERLAP THE CLEAR ZONE</p>
               </li>
               <li className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-[#E0E7FF] text-[#4338CA] flex items-center justify-center text-xs font-mono">02</div>
                  <p className="text-sm font-mono text-[#71717A]">MEASURE FROM CAP HEIGHT</p>
               </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Concept Exploration */}
      <div className="border-t border-[#E4E4E7] pt-16">
         <div className="mb-12">
            <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-4">Mark Exploration</h2>
            <p className="text-lg font-serif text-[#71717A] max-w-2xl">
               Six proposed directions for the brand mark, exploring the intersection of structure, logic, and history.
            </p>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#E4E4E7] border border-[#E4E4E7]">
            <div className="bg-white p-12 flex flex-col items-center justify-between min-h-[240px] hover:bg-gray-50 transition-colors">
               <LogoMarkConcept1 size={64} />
               <div className="text-center mt-8">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-1">Concept 01</p>
                  <p className="text-sm font-serif text-[#09090B]">The Monogram</p>
               </div>
            </div>
            <div className="bg-white p-12 flex flex-col items-center justify-between min-h-[240px] hover:bg-gray-50 transition-colors">
               <LogoMarkConcept2 size={64} />
               <div className="text-center mt-8">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-1">Concept 02</p>
                  <p className="text-sm font-serif text-[#09090B]">The Logic Gate</p>
               </div>
            </div>
            <div className="bg-white p-12 flex flex-col items-center justify-between min-h-[240px] hover:bg-gray-50 transition-colors">
               <LogoMarkConcept3 size={64} />
               <div className="text-center mt-8">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-1">Concept 03</p>
                  <p className="text-sm font-serif text-[#09090B]">The Prism</p>
               </div>
            </div>
            <div className="bg-white p-12 flex flex-col items-center justify-between min-h-[240px] hover:bg-gray-50 transition-colors">
               <LogoMarkConcept4 size={64} />
               <div className="text-center mt-8">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-1">Concept 04</p>
                  <p className="text-sm font-serif text-[#09090B]">The Ledger</p>
               </div>
            </div>
            <div className="bg-white p-12 flex flex-col items-center justify-between min-h-[240px] hover:bg-gray-50 transition-colors">
               <LogoMarkConcept5 size={64} />
               <div className="text-center mt-8">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-1">Concept 05</p>
                  <p className="text-sm font-serif text-[#09090B]">The Cursor</p>
               </div>
            </div>
            <div className="bg-white p-12 flex flex-col items-center justify-between min-h-[240px] hover:bg-gray-50 transition-colors">
               <LogoMarkConcept6 size={64} />
               <div className="text-center mt-8">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-1">Concept 06</p>
                  <p className="text-sm font-serif text-[#09090B]">The Signal</p>
               </div>
            </div>
         </div>
      </div>

      {/* Application Context */}
      <div className="border-t border-[#E4E4E7] pt-16">
        <h2 className="text-3xl font-serif tracking-tight text-[#09090B] mb-12">Application Context</h2>
        
        <div className="space-y-12">
           {/* Digital Masthead */}
           <div className="border border-[#E4E4E7] bg-white">
              <div className="p-4 border-b border-[#E4E4E7] bg-gray-50 flex justify-between items-center">
                 <p className="text-xs font-mono text-[#71717A]">BROWSER MASTHEAD</p>
                 <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#E4E4E7]"></div>
                    <div className="w-2 h-2 rounded-full bg-[#E4E4E7]"></div>
                 </div>
              </div>
              <div className="p-8 flex justify-between items-center bg-white">
                 <Logo size="md" />
                 <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-[#71717A]">
                    <span>Essays</span>
                    <span>Archive</span>
                    <span>About</span>
                    <span>Subscribe</span>
                 </div>
                 <div className="md:hidden">
                    <div className="w-6 h-4 flex flex-col justify-between">
                       <div className="w-full h-px bg-[#09090B]"></div>
                       <div className="w-full h-px bg-[#09090B]"></div>
                       <div className="w-full h-px bg-[#09090B]"></div>
                    </div>
                 </div>
              </div>
              <div className="border-t border-[#E4E4E7] p-8 md:p-16">
                 <p className="font-serif text-4xl md:text-5xl text-[#09090B] max-w-3xl leading-tight mb-6">
                    The Industrial Revolution of Intelligence
                 </p>
                 <p className="font-serif text-lg md:text-xl text-[#71717A] max-w-2xl leading-relaxed">
                    How silicon replaced steam, and what history tells us about the economics of the next century.
                 </p>
              </div>
           </div>

           {/* Social Assets */}
           <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-[#E4E4E7] bg-white p-8">
                 <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6">Social Avatar</p>
                 <div className="flex gap-6 items-center">
                    <div className="w-20 h-20 rounded-full bg-[#4338CA] flex items-center justify-center">
                       <LogoMark variant="indigo" size={40} />
                    </div>
                    <div className="w-20 h-20 rounded-none bg-[#09090B] flex items-center justify-center">
                       <LogoMark variant="white" size={40} />
                    </div>
                 </div>
              </div>
              
              <div className="border border-[#E4E4E7] bg-white p-8">
                 <p className="text-xs font-mono uppercase tracking-widest text-[#71717A] mb-6">Favicon</p>
                 <div className="flex gap-8 bg-gray-100 p-4 rounded-t-lg">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-t text-xs font-sans border border-b-0 border-[#E4E4E7]">
                       <LogoFavicon size={16} />
                       <span className="text-[#09090B]">Code & Capital</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-50 text-xs font-sans">
                       <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                       <span>New Tab</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
