# PROJECT BLUEPRINT: AISHA PORTFOLIO

## Design Tokens

### Color Palette
- **Primary Background**: `#F0F0E8` (Cream/Sand)
- **Text Primary**: `#1A1A1A` (Deep Slate/Black)
- **Accent Color**: `#6B705C` (Sage/Olive Green)

### Typography
- **Primary Sans**: `Space Grotesk` (via Google Fonts)

## System Architecture

### Root Layout (`layout.tsx`)
The global layout acts as the primary orchestrator, wrapping all pages in the following high-fidelity providers:
- `SmoothScroll`: Lenis integration for unified momentum scrolling.
- `CustomCursor`: GSAP-powered custom pointer for metabolic/fluid interactions.

### Component Organization
Components are segmented by scope:
- `src/components/sections`: Business-logic specific page sections (Hero, Services, ContactForm, etc.)
- `src/components/ui`: Atomic interactive elements (Magnetic, Button, Input, etc.)
- `src/components/global`: Layout-critical shared components.

## Animation Strategy
- **Magnetic Interactions**: Implemented via `framer-motion` in `src/components/ui/Magnetic.tsx`.
- **Scroll Orchestration**: Complex entrance and transition timelines managed via **GSAP** and `ScrollTrigger`.
