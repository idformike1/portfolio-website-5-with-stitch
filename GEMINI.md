# GEMINI DEVELOPMENT CONTEXT

## Development Philosophy
- **Manual Surgical Audit Only**: No automated browser agents or high-volume scripts should be used to modify code unless explicitly requested.
- **State Integrity**: Maintain 100% architectural integrity during development sprints.

## Technical Stack
- **Framework**: Next.js 16 (App Router architecture)
- **Styling**: Tailwind CSS V4 (Utility-first with OKLCH support)
- **Motion Engine**: GSAP (GreenSock) for complex scroll-triggered timelines
- **Smooth Scrolling**: Lenis (@studio-freight/lenis) for unified inertia based scrolling
- **Component Transitions**: Framer Motion for magnetic interactions and micro-animations

## Environment Exclusions
- `.next/` (Build artifacts)
- `node_modules/` (Dependecies)
- `public/assets/` (Static media files)
- `.git/` (Version control metadata)
