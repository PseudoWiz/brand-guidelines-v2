import { motion } from 'motion/react';
import { Download, FileText, Image, Code, Package, ExternalLink } from 'lucide-react';

export function BrandExport() {
  const assetCategories = [
    {
      icon: Image,
      title: 'Logo Assets',
      description: 'Complete logo package with all variations and formats',
      items: [
        'Primary logotype (SVG, PNG, PDF)',
        'Logo variations (black, white, indigo)',
        'Logomarks and icons',
        'Favicon set (16px, 32px, 64px)',
        'Social media assets'
      ],
      status: 'Coming Soon'
    },
    {
      icon: FileText,
      title: 'Brand Guidelines PDF',
      description: 'Comprehensive brand guidelines in print-ready format',
      items: [
        'Complete design system documentation',
        'Usage guidelines and examples',
        'Do\'s and don\'ts',
        'Print specifications',
        'Implementation notes'
      ],
      status: 'Coming Soon'
    },
    {
      icon: Code,
      title: 'Design Tokens',
      description: 'Code-ready design tokens for developers',
      items: [
        'CSS custom properties',
        'JavaScript/TypeScript tokens',
        'Tailwind config',
        'Figma design tokens',
        'iOS/Android tokens'
      ],
      status: 'Preview Available'
    },
    {
      icon: Package,
      title: 'Component Library',
      description: 'React components with TypeScript support',
      items: [
        'Button components',
        'Form elements',
        'Card patterns',
        'Typography components',
        'Layout primitives'
      ],
      status: 'In Development'
    }
  ];

  return (
    <section className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono tracking-wider text-[#71717A] mb-4">09 / EXPORT ASSETS</p>
        <h1 className="mb-6">Download Brand Assets</h1>
        <p className="text-lg leading-relaxed max-w-3xl text-[#27272A]">
          Everything you need to implement the Code & Capital brand. From logos to design tokens, 
          these assets ensure consistency across all touchpoints.
        </p>
      </motion.div>

      {/* Asset Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        {assetCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              className="border border-[#E4E4E7] bg-white hover:border-[#4338CA] transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#4338CA] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3>{category.title}</h3>
                      <span className={`text-xs font-mono px-2 py-1 ${
                        category.status === 'Preview Available' 
                          ? 'bg-[#16A34A] text-white' 
                          : category.status === 'In Development'
                          ? 'bg-[#EAB308] text-white'
                          : 'bg-gray-200 text-[#71717A]'
                      }`}>
                        {category.status}
                      </span>
                    </div>
                    <p className="text-sm text-[#71717A] mb-4">{category.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-mono text-[#71717A] mb-3">INCLUDES</p>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-sm text-[#27272A] flex items-start gap-2">
                        <span className="text-[#4338CA] flex-shrink-0">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className={`w-full py-3 font-mono text-sm transition-all flex items-center justify-center gap-2 ${
                    category.status === 'Coming Soon'
                      ? 'bg-gray-100 text-[#71717A] cursor-not-allowed'
                      : 'bg-[#4338CA] text-white hover:bg-[#312E81]'
                  }`}
                  disabled={category.status === 'Coming Soon'}
                >
                  {category.status === 'Coming Soon' ? (
                    <>Coming Soon</>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download Package
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Design Tokens Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="border border-[#4338CA] bg-white"
      >
        <div className="p-8 border-b border-[#E4E4E7]">
          <h2 className="mb-2">Design Tokens Preview</h2>
          <p className="text-sm text-[#71717A]">
            Copy and use these tokens in your projects for consistent styling.
          </p>
        </div>

        <div className="p-0">
          <div className="grid md:grid-cols-2">
            {/* CSS Variables */}
            <div className="p-8 border-r border-[#E4E4E7]">
              <div className="flex items-center justify-between mb-4">
                <h4>CSS Custom Properties</h4>
                <button className="text-xs font-mono text-[#4338CA] hover:underline">
                  COPY ALL
                </button>
              </div>
              <pre className="bg-[#09090B] text-white p-6 text-xs overflow-x-auto font-mono">
{`:root {
  /* Colors */
  --color-indigo: #4338CA;
  --color-black: #09090B;
  --color-white: #FFFFFF;
  --color-text: #09090B;
  --color-muted: #71717A;
  
  /* Typography */
  --font-serif: 'EB Garamond', serif;
  --font-mono: 'IBM Plex Mono', monospace;
  
  /* Spacing */
  --spacing-4: 1rem;
  --spacing-6: 2rem;
  --spacing-8: 3rem;
}`}
              </pre>
            </div>

            {/* Tailwind Config */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h4>Tailwind Configuration</h4>
                <button className="text-xs font-mono text-[#4338CA] hover:underline">
                  COPY ALL
                </button>
              </div>
              <pre className="bg-[#09090B] text-white p-6 text-xs overflow-x-auto font-mono">
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        indigo: '#4338CA',
        black: '#09090B',
      },
      fontFamily: {
        serif: ['EB Garamond'],
        mono: ['IBM Plex Mono'],
      }
    }
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </motion.div>

      {/* External Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="mb-8">External Resources</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Figma Design Files', desc: 'Complete design system in Figma', link: '#' },
            { title: 'GitHub Repository', desc: 'Source code and components', link: '#' },
            { title: 'NPM Package', desc: 'Install via package manager', link: '#' },
          ].map((resource) => (
            <a
              key={resource.title}
              href={resource.link}
              className="border border-[#E4E4E7] p-6 hover:border-[#4338CA] hover:bg-[#4338CA]/5 transition-all group block"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="group-hover:text-[#4338CA]">{resource.title}</h4>
                <ExternalLink className="w-4 h-4 text-[#71717A] group-hover:text-[#4338CA]" />
              </div>
              <p className="text-sm text-[#71717A]">{resource.desc}</p>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Usage Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-[#09090B] text-white p-12"
      >
        <h2 className="mb-8 text-white">License & Usage</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="mb-4 text-white">Allowed Uses</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex gap-3">
                <span className="flex-shrink-0">✓</span>
                <span>Internal company materials and presentations</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✓</span>
                <span>Official Code & Capital products and services</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✓</span>
                <span>Marketing and promotional materials</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✓</span>
                <span>Partner integrations (with approval)</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Restrictions</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <span className="flex-shrink-0">✗</span>
                <span>Modification of logo or brand marks</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✗</span>
                <span>Use in competitive products or services</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✗</span>
                <span>Redistribution of brand assets</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✗</span>
                <span>Suggesting endorsement without permission</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm text-white/80">
            Questions about usage? Contact <a href="mailto:brand@codecapital.com" className="text-white underline hover:text-[#E0E7FF]">brand@codecapital.com</a>
          </p>
        </div>
      </motion.div>

      {/* Version History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="border border-[#E4E4E7] bg-gray-50"
      >
        <div className="p-8">
          <h2 className="mb-6">Version History</h2>
          
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="w-24 flex-shrink-0">
                <p className="font-mono text-sm">v2.1.0</p>
                <p className="text-xs text-[#71717A]">Dec 2024</p>
              </div>
              <div className="flex-1">
                <p className="text-sm mb-2">Current Release</p>
                <ul className="text-xs text-[#71717A] space-y-1">
                  <li>• Enhanced design philosophy section</li>
                  <li>• Added motion principles and animation patterns</li>
                  <li>• Expanded color scale with semantic tokens</li>
                  <li>• New spacing system documentation</li>
                  <li>• Interactive playground for experimentation</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 opacity-60">
              <div className="w-24 flex-shrink-0">
                <p className="font-mono text-sm">v2.0.0</p>
                <p className="text-xs text-[#71717A]">Nov 2024</p>
              </div>
              <div className="flex-1">
                <p className="text-sm mb-2">Previous Release</p>
                <ul className="text-xs text-[#71717A] space-y-1">
                  <li>• Rebrand to Electric Indigo color system</li>
                  <li>• Updated logo variations and usage guidelines</li>
                  <li>• Comprehensive component library</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-6 opacity-40">
              <div className="w-24 flex-shrink-0">
                <p className="font-mono text-sm">v1.0.0</p>
                <p className="text-xs text-[#71717A]">Oct 2024</p>
              </div>
              <div className="flex-1">
                <p className="text-sm mb-2">Initial Release</p>
                <ul className="text-xs text-[#71717A] space-y-1">
                  <li>• Core brand identity established</li>
                  <li>• Basic typography and color system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
