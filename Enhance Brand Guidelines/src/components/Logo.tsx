interface LogoProps {
  variant?: 'primary' | 'white' | 'black' | 'indigo';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export function Logo({ variant = 'primary', size = 'md', showTagline = false }: LogoProps) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const colors = {
    primary: 'text-[#09090B]',
    white: 'text-white',
    black: 'text-black',
    indigo: 'text-[#4338CA]'
  };

  const taglineColors = {
    primary: 'text-[#71717A]',
    white: 'text-white/60',
    black: 'text-black/50',
    indigo: 'text-[#71717A]'
  };

  return (
    <div className="inline-flex flex-col items-center">
      <div className={`${sizes[size]} ${colors[variant]} tracking-tight flex items-baseline`} style={{ fontFamily: "'EB Garamond', 'Adobe Garamond Pro', serif" }}>
        <span style={{ fontWeight: 600 }}>Code</span>
        <span className="mx-1.5" style={{ fontWeight: 300, fontStyle: 'italic', opacity: 0.8 }}>&amp;</span>
        <span style={{ fontWeight: 600 }}>Capital</span>
      </div>
      {showTagline && (
        <p className={`text-xs mt-3 ${taglineColors[variant]}`} style={{ 
          fontFamily: "'IBM Plex Mono', monospace",
          fontWeight: 400,
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}>
          Where ideas become leverage
        </p>
      )}
    </div>
  );
}

// Concept 1: The Monogram (Intertwined C&C)
export function LogoMarkConcept1({ size = 40, color = '#4338CA' }: { size?: number, color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M65 35C65 26.7157 58.2843 20 50 20C41.7157 20 35 26.7157 35 35V65C35 73.2843 41.7157 80 50 80C58.2843 80 65 73.2843 65 65" stroke={color} strokeWidth="6" strokeLinecap="square" />
      <path d="M45 50H55" stroke={color} strokeWidth="6" />
    </svg>
  );
}

// Concept 2: The Logic Gate (Abstract Node)
export function LogoMarkConcept2({ size = 40, color = '#4338CA' }: { size?: number, color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="4" />
      <path d="M50 20V35" stroke={color} strokeWidth="4" />
      <path d="M50 65V80" stroke={color} strokeWidth="4" />
      <path d="M20 50H35" stroke={color} strokeWidth="4" />
      <path d="M65 50H80" stroke={color} strokeWidth="4" />
      <circle cx="50" cy="50" r="8" fill={color} />
    </svg>
  );
}

// Concept 3: The Prism (History & Future)
export function LogoMarkConcept3({ size = 40, color = '#4338CA' }: { size?: number, color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="20" width="8" height="60" fill={color} opacity="0.5" />
      <rect x="57" y="20" width="8" height="60" fill={color} />
      <path d="M35 50L65 50" stroke={color} strokeWidth="4" />
    </svg>
  );
}

// Concept 4: The Ledger (Structure)
export function LogoMarkConcept4({ size = 40, color = '#4338CA' }: { size?: number, color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="25" width="50" height="50" stroke={color} strokeWidth="4" />
      <line x1="25" y1="42" x2="75" y2="42" stroke={color} strokeWidth="2" />
      <line x1="25" y1="58" x2="75" y2="58" stroke={color} strokeWidth="2" />
      <line x1="42" y1="25" x2="42" y2="75" stroke={color} strokeWidth="2" />
    </svg>
  );
}

// Concept 5: The Cursor (Digital/Print)
export function LogoMarkConcept5({ size = 40, color = '#4338CA' }: { size?: number, color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 30C34.4772 30 30 34.4772 30 40V60C30 65.5228 34.4772 70 40 70H50" stroke={color} strokeWidth="6" strokeLinecap="square" />
      <rect x="60" y="30" width="10" height="40" fill={color} />
    </svg>
  );
}

// Concept 6: The Signal (Pulse)
export function LogoMarkConcept6({ size = 40, color = '#4338CA' }: { size?: number, color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" stroke={color} strokeWidth="3" opacity="0.3" />
      <circle cx="50" cy="50" r="25" stroke={color} strokeWidth="4" opacity="0.6" />
      <circle cx="50" cy="50" r="15" fill={color} />
    </svg>
  );
}


export function LogoMark({ variant = 'primary', size = 40 }: { variant?: 'primary' | 'white' | 'indigo'; size?: number }) {
  const colors = {
    primary: '#4338CA',
    white: '#FFFFFF',
    indigo: '#4338CA'
  };
  
  // Defaulting to Concept 1 (Monogram)
  return <LogoMarkConcept1 size={size} color={colors[variant]} />;
}

export function LogoIcon({ variant = 'primary', size = 40 }: { variant?: 'primary' | 'white' | 'indigo'; size?: number }) {
  return <LogoMark variant={variant} size={size} />;
}

export function LogoMinimal({ variant = 'primary', size = 'md' }: { variant?: 'primary' | 'white' | 'indigo' | 'black'; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const colors = {
    primary: 'text-[#09090B]',
    white: 'text-white',
    indigo: 'text-[#4338CA]',
    black: 'text-black'
  };

  const ampersandColors = {
    primary: 'text-[#4338CA]',
    white: 'text-white',
    indigo: 'text-[#6366F1]',
    black: 'text-[#4338CA]'
  };

  return (
    <div className={`${sizes[size]} ${colors[variant]} tracking-tight font-mono`}>
      <span>C</span>
      <span className={`mx-0.5 ${ampersandColors[variant]}`}>&amp;</span>
      <span>C</span>
    </div>
  );
}

export function LogoFavicon({ size = 32 }: { size?: 16 | 32 | 64 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" fill="#4338CA" />
      <path d="M21 11C21 8.23858 18.7614 6 16 6C13.2386 6 11 8.23858 11 11V21C11 23.7614 13.2386 26 16 26C18.7614 26 21 23.7614 21 21" stroke="white" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}
