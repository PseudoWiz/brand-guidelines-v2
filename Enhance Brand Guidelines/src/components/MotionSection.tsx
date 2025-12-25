import { motion } from 'motion/react';
import { useState } from 'react';
import { Play } from 'lucide-react';

export function MotionSection() {
  const [showAnimation, setShowAnimation] = useState<string | null>(null);

  const triggerAnimation = (type: string) => {
    setShowAnimation(null);
    setTimeout(() => setShowAnimation(type), 50);
  };

  return (
    <section className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-mono tracking-wider text-[#71717A] mb-4">07 / MOTION & ANIMATION</p>
        <h1 className="mb-6">Motion Principles</h1>
        <p className="text-lg leading-relaxed max-w-3xl text-[#27272A]">
          Motion should feel purposeful, not decorative. We use animation to guide attention, 
          provide feedback, and create delight—never to distract or slow down the user.
        </p>
      </motion.div>

      {/* Motion Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-[#4338CA] text-white p-12"
      >
        <h2 className="mb-8 text-white">Our Motion Philosophy</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="mb-3 text-white">Purposeful</h4>
            <p className="text-sm text-white/80">
              Every animation serves a function: guiding attention, confirming actions, 
              or revealing relationships between elements.
            </p>
          </div>
          
          <div>
            <h4 className="mb-3 text-white">Subtle</h4>
            <p className="text-sm text-white/80">
              Animations should feel natural, not showy. Fast enough to feel responsive, 
              slow enough to be perceived.
            </p>
          </div>
          
          <div>
            <h4 className="mb-3 text-white">Respectful</h4>
            <p className="text-sm text-white/80">
              Honor user preferences (prefers-reduced-motion) and never animate critical 
              UI in ways that impede usability.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Duration Scale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="mb-8">Duration Scale</h2>
        
        <div className="border border-[#E4E4E7] divide-y divide-[#E4E4E7]">
          {[
            { name: 'Instant', ms: '0ms', use: 'No animation, immediate response', example: 'Toggle states' },
            { name: 'Fast', ms: '150ms', use: 'Quick feedback, micro-interactions', example: 'Button hovers, focus states' },
            { name: 'Normal', ms: '250ms', use: 'Standard UI transitions', example: 'Modal opens, dropdown menus' },
            { name: 'Slow', ms: '400ms', use: 'Deliberate, emphasized movements', example: 'Page transitions, reveals' },
            { name: 'Very Slow', ms: '600ms+', use: 'Rarely used, special effects', example: 'Hero animations, onboarding' },
          ].map((duration) => (
            <div key={duration.name} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="grid md:grid-cols-[150px_100px_1fr_200px] gap-6 items-center">
                <div>
                  <p className="text-xs font-mono text-[#71717A]">DURATION</p>
                  <p className="text-lg">{duration.name}</p>
                </div>
                
                <div>
                  <p className="font-mono text-sm">{duration.ms}</p>
                </div>
                
                <div>
                  <p className="text-sm text-[#27272A] mb-1">{duration.use}</p>
                  <p className="text-xs text-[#71717A]">Example: {duration.example}</p>
                </div>
                
                <div className="flex justify-end">
                  <button
                    onClick={() => triggerAnimation(duration.name)}
                    className="px-4 py-2 border border-[#E4E4E7] hover:border-[#4338CA] text-sm font-mono flex items-center gap-2"
                  >
                    <Play className="w-3 h-3" />
                    Preview
                  </button>
                </div>
              </div>
              
              {/* Preview Animation */}
              {showAnimation === duration.name && (
                <div className="mt-4 pt-4 border-t border-[#E4E4E7]">
                  <motion.div
                    className="h-12 bg-[#4338CA]"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                      duration: parseInt(duration.ms) / 1000,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Easing Functions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="mb-8">Easing Functions</h2>
        <p className="text-[#27272A] mb-8 leading-relaxed max-w-3xl">
          Easing creates natural movement. We use custom cubic-bezier curves for precise, 
          fluid interactions.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-[#E4E4E7] p-8">
            <h4 className="mb-4">Standard Ease</h4>
            <p className="font-mono text-sm text-[#71717A] mb-4">cubic-bezier(0.16, 1, 0.3, 1)</p>
            <p className="text-sm text-[#27272A] mb-6">
              Our default easing. Starts slowly, accelerates, then eases out.
            </p>
            <button
              onClick={() => triggerAnimation('standard-ease')}
              className="px-6 py-3 bg-[#4338CA] text-white font-mono text-sm flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Preview
            </button>
            {showAnimation === 'standard-ease' && (
              <motion.div
                className="mt-6 w-16 h-16 bg-[#4338CA]"
                initial={{ x: 0 }}
                animate={{ x: '300px' }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
              />
            )}
          </div>

          <div className="border border-[#E4E4E7] p-8">
            <h4 className="mb-4">Spring Ease</h4>
            <p className="font-mono text-sm text-[#71717A] mb-4">cubic-bezier(0.34, 1.56, 0.64, 1)</p>
            <p className="text-sm text-[#27272A] mb-6">
              Adds a subtle bounce. Use sparingly for playful moments or to emphasize 
              important state changes.
            </p>
            <button
              onClick={() => triggerAnimation('spring-ease')}
              className="px-6 py-3 bg-[#4338CA] text-white font-mono text-sm flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Preview
            </button>
            {showAnimation === 'spring-ease' && (
              <motion.div
                className="mt-6 w-16 h-16 bg-[#4338CA]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              />
            )}
          </div>
        </div>
      </motion.div>

      {/* Animation Patterns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="mb-8">Common Animation Patterns</h2>
        
        <div className="space-y-8">
          {/* Fade In */}
          <div className="border border-[#E4E4E7] p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="mb-2">Fade In</h4>
                <p className="text-sm text-[#71717A]">Opacity: 0 → 1 | Duration: 250ms</p>
              </div>
              <button
                onClick={() => triggerAnimation('fade-in')}
                className="px-4 py-2 border border-[#E4E4E7] hover:border-[#4338CA] text-sm font-mono flex items-center gap-2"
              >
                <Play className="w-3 h-3" />
                Preview
              </button>
            </div>
            {showAnimation === 'fade-in' && (
              <motion.div
                className="p-6 bg-[#4338CA] text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                Content fading in smoothly
              </motion.div>
            )}
          </div>

          {/* Slide Up */}
          <div className="border border-[#E4E4E7] p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="mb-2">Slide Up</h4>
                <p className="text-sm text-[#71717A]">Y: 20px → 0 | Opacity: 0 → 1 | Duration: 400ms</p>
              </div>
              <button
                onClick={() => triggerAnimation('slide-up')}
                className="px-4 py-2 border border-[#E4E4E7] hover:border-[#4338CA] text-sm font-mono flex items-center gap-2"
              >
                <Play className="w-3 h-3" />
                Preview
              </button>
            </div>
            {showAnimation === 'slide-up' && (
              <motion.div
                className="p-6 bg-[#4338CA] text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Content sliding up into view
              </motion.div>
            )}
          </div>

          {/* Scale In */}
          <div className="border border-[#E4E4E7] p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="mb-2">Scale In</h4>
                <p className="text-sm text-[#71717A]">Scale: 0.95 → 1 | Opacity: 0 → 1 | Duration: 300ms</p>
              </div>
              <button
                onClick={() => triggerAnimation('scale-in')}
                className="px-4 py-2 border border-[#E4E4E7] hover:border-[#4338CA] text-sm font-mono flex items-center gap-2"
              >
                <Play className="w-3 h-3" />
                Preview
              </button>
            </div>
            {showAnimation === 'scale-in' && (
              <motion.div
                className="p-6 bg-[#4338CA] text-white"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Content scaling into view
              </motion.div>
            )}
          </div>

          {/* Stagger Children */}
          <div className="border border-[#E4E4E7] p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="mb-2">Staggered List</h4>
                <p className="text-sm text-[#71717A]">Children appear sequentially with 50ms delay</p>
              </div>
              <button
                onClick={() => triggerAnimation('stagger')}
                className="px-4 py-2 border border-[#E4E4E7] hover:border-[#4338CA] text-sm font-mono flex items-center gap-2"
              >
                <Play className="w-3 h-3" />
                Preview
              </button>
            </div>
            {showAnimation === 'stagger' && (
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <motion.div
                    key={item}
                    className="p-4 bg-[#4338CA] text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    List item {item}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-[#09090B] text-white p-12"
      >
        <h2 className="mb-8 text-white">Animation Guidelines</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="mb-4 text-white">Do</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex gap-3">
                <span className="flex-shrink-0">✓</span>
                <span>Use animations to guide user attention to important changes</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✓</span>
                <span>Keep durations under 400ms for UI transitions</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✓</span>
                <span>Respect prefers-reduced-motion user preferences</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✓</span>
                <span>Use consistent easing functions for related animations</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Don't</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <span className="flex-shrink-0">✗</span>
                <span>Animate multiple complex elements simultaneously</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✗</span>
                <span>Use animations longer than 600ms for UI feedback</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✗</span>
                <span>Animate opacity and transform separately (combine them)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">✗</span>
                <span>Create animations that distract from core functionality</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
