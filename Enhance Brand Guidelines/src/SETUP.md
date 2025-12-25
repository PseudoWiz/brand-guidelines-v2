# Setup Instructions

## Complete Installation Guide

This repository contains the Code & Capital Brand Guidelines v2.1 interactive web application.

### Step 1: Clone and Install

```bash
git clone https://github.com/PseudoWiz/brand-guidelines-v2.git
cd brand-guidelines-v2
npm install
```

### Step 2: Install Vite Config

Create a `vite.config.ts` file in the root directory:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
```

### Step 3: Install TypeScript Config

Create a `tsconfig.json` file in the root directory:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthrough ThroughCasesInSwitch": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Step 4: Create Entry Point

Create an `index.html` file in the root directory:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Code & Capital Brand Guidelines v2.1</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.tsx"></script>
  </body>
</html>
```

Create a `main.tsx` file in the root directory:

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Step 5: UI Components (Shadcn/UI)

The project uses UI components from shadcn/ui. These are already included in `/components/ui/`. If any components are missing or you need to update them:

```bash
# Initialize shadcn/ui (if needed)
npx shadcn@latest init

# Add individual components (if needed)
npx shadcn@latest add button
npx shadcn@latest add card
# ... etc
```

### Step 6: Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Step 7: Build for Production

```bash
npm run build
npm run preview
```

## Troubleshooting

### Missing Dependencies

If you encounter missing dependencies, ensure you've run:

```bash
npm install
```

All required dependencies are listed in `package.json`.

### UI Component Issues

If UI components are not working:

1. Check that all files in `/components/ui/` are present
2. Verify that `clsx` and `tailwind-merge` are installed:
   ```bash
   npm install clsx tailwind-merge
   ```
3. Reinstall shadcn components if needed

### TypeScript Errors

If you see TypeScript errors:

1. Ensure `tsconfig.json` is properly configured (see Step 3)
2. Install type definitions:
   ```bash
   npm install -D @types/react @types/react-dom
   ```

### Tailwind Not Working

Ensure Tailwind CSS 4.0 is properly configured in `styles/globals.css` (it already is in this repository).

## Additional Configuration

### Environment Variables

This project doesn't require environment variables for basic functionality.

### Custom Fonts

The project uses Google Fonts (EB Garamond and IBM Plex Mono) which are imported in `styles/globals.css`. No additional setup needed.

## Development Notes

- The project uses Vite as the build tool
- React 18.3 with TypeScript
- Tailwind CSS 4.0 with custom design tokens
- Motion (Framer Motion) for animations
- Lucide React for icons

## Support

For issues or questions about the brand guidelines, refer to the main [README.md](./README.md) or visit the Code & Capital website.
