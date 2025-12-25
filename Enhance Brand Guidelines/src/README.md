# Code & Capital Brand Guidelines v2.1

Premium brand guidelines for **Code & Capital** — an editorial publication focused on AI, science, computing, and technological progress.

![Code & Capital](https://img.shields.io/badge/Version-2.1-4338CA?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📖 Overview

Code & Capital is a publication/media company that treats AI as a civilisational technology, not a product cycle. Our design system combines the authority of print journalism with the precision of code.

This interactive brand guidelines application showcases:

- **Philosophy** — Our editorial mission and design restraint
- **Logo & Identity** — Primary masthead, logomark concepts, and usage guidelines
- **Colors** — Electric Indigo color system with accessibility compliance
- **Typography** — EB Garamond and IBM Plex Mono type system
- **Spacing** — Fibonacci-inspired spacing scale
- **Components** — Reusable UI patterns and design tokens
- **Motion & Animation** — Motion principles and interactive demonstrations
- **Playground** — Interactive tools for testing brand applications
- **Export & Assets** — Downloadable resources and code snippets

## 🎨 Brand Essence

> "We treat AI as a civilisational technology, not a product cycle. Our design must communicate permanence, depth, and clarity."

### Core Principles

- **Editorial Authority** — Content is king. Typography and layout serve the reading experience.
- **Technical Precision** — Our design reflects the logic and structure of software.
- **Historical Context** — We view technology through the lens of history.
- **Radical Clarity** — No marketing fluff. Just the signal, presented with maximum legibility.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PseudoWiz/brand-guidelines-v2.git

# Navigate to the project directory
cd brand-guidelines-v2

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 🏗️ Project Structure

```
brand-guidelines-v2/
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── BrandExport.tsx  # Export & assets section
│   ├── ColorsSection.tsx
│   ├── ComponentsSection.tsx
│   ├── Logo.tsx         # Logo components
│   ├── LogoSection.tsx
│   ├── MotionSection.tsx
│   ├── OverviewSection.tsx
│   ├── PhilosophySection.tsx
│   ├── PlaygroundSection.tsx
│   ├── SpacingSection.tsx
│   └── TypographySection.tsx
├── styles/
│   └── globals.css      # Design tokens and typography system
├── App.tsx              # Main application component
└── package.json
```

## 🎨 Design System

### Typography

- **Primary**: EB Garamond (serif) — for headlines, body text, and editorial content
- **Secondary**: IBM Plex Mono (monospace) — for labels, code, and UI elements

### Colors

- **Primary**: Electric Indigo `#4338CA`
- **Neutrals**: Zinc scale from `#09090B` (black) to `#FFFFFF` (white)
- **Semantic**: Success `#16A34A`, Warning `#EAB308`, Error `#DC2626`

### Spacing

Fibonacci-inspired scale: `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px`

## 🛠️ Technologies

- **React 18.3** — UI framework
- **Tailwind CSS 4.0** — Utility-first CSS framework
- **Motion (Framer Motion)** — Animation library
- **Vite** — Build tool and development server
- **Lucide React** — Icon system
- **Shadcn UI** — Component primitives

## 📝 License

MIT License — see the LICENSE file for details.

## 🙏 Attributions

This project includes:
- Components from [shadcn/ui](https://ui.shadcn.com/) used under [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)
- Photos from [Unsplash](https://unsplash.com) used under [license](https://unsplash.com/license)

## 📧 Contact

For questions about these brand guidelines, please visit [Code & Capital](https://codeandcapital.com)

---

**Version 2.1** — Updated December 2024
