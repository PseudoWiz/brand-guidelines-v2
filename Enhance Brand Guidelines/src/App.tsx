import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

import { OverviewSection } from './components/OverviewSection';
import { PhilosophySection } from './components/PhilosophySection';
import { LogoSection } from './components/LogoSection';
import { ColorsSection } from './components/ColorsSection';
import { TypographySection } from './components/TypographySection';
import { SpacingSection } from './components/SpacingSection';
import { ComponentsSection } from './components/ComponentsSection';
import { MotionSection } from './components/MotionSection';
import { PlaygroundSection } from './components/PlaygroundSection';
import { BrandExport } from './components/BrandExport';

/**
 * COMPONENT INTEGRATION MAP
 * Central registry for navigation structure
 */
const ComponentRegistry = [
  { id: 'overview', label: 'Overview', icon: '◈', component: OverviewSection },
  { id: 'philosophy', label: 'Philosophy', icon: '◆', component: PhilosophySection },
  { id: 'logo_identity', label: 'Logo & Identity', icon: '◇', component: LogoSection },
  { id: 'colors', label: 'Colors', icon: '●', component: ColorsSection },
  { id: 'typography', label: 'Typography', icon: 'T', component: TypographySection },
  { id: 'spacing', label: 'Spacing', icon: '⊞', component: SpacingSection },
  { id: 'components', label: 'Components', icon: '⊕', component: ComponentsSection },
  { id: 'motion', label: 'Motion & Animation', icon: '→', component: MotionSection },
  { id: 'playground', label: 'Playground', icon: '⚙', component: PlaygroundSection },
  { id: 'export', label: 'Export & Assets', icon: '↓', component: BrandExport },
];

/**
 * PRIMARY APPLICATION COMPONENT
 * Orchestrates navigation, state management, and section rendering
 */
function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Render section based on active navigation
  const renderActiveSection = () => {
    const section = ComponentRegistry.find(item => item.id === activeSection);
    const SectionComponent = section ? section.component : OverviewSection;
    return <SectionComponent />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-zinc-200 z-40">
        <div className="flex items-center justify-between px-8 py-4 max-w-8xl mx-auto w-full">
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="text-[#4338CA]"
            >
              {/* Premium Mark: The Prism */}
              <defs>
                <linearGradient id="prismGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3d4fc9" />
                  <stop offset="100%" stopColor="#00d9ff" />
                </linearGradient>
              </defs>
              <path
                d="M 16 4 L 28 24 L 4 24 Z"
                fill="url(#prismGradient)"
                opacity="0.8"
              />
              <path
                d="M 16 8 L 24 20 L 8 20 Z"
                fill="white"
                opacity="0.3"
              />
            </svg>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#09090B]">Code & Capital</span>
              <span className="text-xs text-[#71717A]">Brand Guidelines v2.1</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {ComponentRegistry.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-[#4338CA] border-b-2 border-[#4338CA]'
                    : 'text-[#71717A] hover:text-[#09090B]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-zinc-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-[#09090B]" />
            ) : (
              <Menu size={24} className="text-[#09090B]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-zinc-200 bg-zinc-50"
            >
              <div className="flex flex-col gap-2 px-6 py-4">
                {ComponentRegistry.map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-[#E0E7FF] text-[#4338CA] font-medium'
                        : 'text-[#27272A] hover:bg-zinc-100'
                    }`}
                  >
                    {item.icon} {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN CONTENT SECTION */}
      <main className="pt-24 px-8 max-w-6xl mx-auto w-full pb-32">
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;
