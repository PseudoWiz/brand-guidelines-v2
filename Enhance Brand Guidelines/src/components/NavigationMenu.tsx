import { motion } from 'motion/react';
import { 
  Home, 
  Lightbulb, 
  Palette, 
  Type, 
  Layers, 
  Ruler, 
  Box, 
  Sparkles, 
  Zap,
  Download
} from 'lucide-react';

interface NavigationMenuProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: 'overview', label: 'Overview', icon: Home, number: '00' },
  { id: 'philosophy', label: 'Philosophy', icon: Lightbulb, number: '01' },
  { id: 'logo', label: 'Logo & Identity', icon: Box, number: '02' },
  { id: 'colors', label: 'Colors', icon: Palette, number: '03' },
  { id: 'typography', label: 'Typography', icon: Type, number: '04' },
  { id: 'spacing', label: 'Spacing', icon: Ruler, number: '05' },
  { id: 'components', label: 'Components', icon: Layers, number: '06' },
  { id: 'motion', label: 'Motion & Animation', icon: Zap, number: '07' },
  { id: 'playground', label: 'Playground', icon: Sparkles, number: '08' },
  { id: 'export', label: 'Export Assets', icon: Download, number: '09' },
];

export function NavigationMenu({ activeSection, setActiveSection }: NavigationMenuProps) {
  return (
    <nav className="fixed left-0 top-[73px] bottom-0 w-72 border-r border-[#E4E4E7] bg-white overflow-y-auto">
      <div className="p-6">
        <p className="text-xs font-mono text-[#71717A] mb-6 tracking-wider">SECTIONS</p>
        
        <ul className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-all group relative ${
                    isActive
                      ? 'text-[#4338CA] bg-[#4338CA]/5'
                      : 'text-[#27272A] hover:text-[#4338CA] hover:bg-gray-50'
                  }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#4338CA]"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  <span className="text-xs font-mono text-[#71717A] w-6">{item.number}</span>
                  <Icon className={`w-4 h-4 flex-shrink-0 transition-transform ${
                    isActive ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  <span className="text-sm flex-1 text-left">{item.label}</span>
                  
                  {/* Hover arrow */}
                  <motion.span
                    className="opacity-0 group-hover:opacity-100 text-[#4338CA]"
                    initial={false}
                    animate={{ x: isActive ? 0 : -4 }}
                  >
                    →
                  </motion.span>
                </button>
              </motion.li>
            );
          })}
        </ul>

        {/* Version & Meta Info */}
        <div className="mt-12 pt-6 border-t border-[#E4E4E7]">
          <div className="space-y-3 text-xs text-[#71717A]">
            <div>
              <p className="font-mono mb-1">VERSION</p>
              <p>2.1.0 — Dec 2024</p>
            </div>
            <div>
              <p className="font-mono mb-1">STATUS</p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#16A34A] rounded-full"></span>
                Active Guidelines
              </p>
            </div>
            <div>
              <p className="font-mono mb-1">LAST UPDATED</p>
              <p>24 December 2024</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
