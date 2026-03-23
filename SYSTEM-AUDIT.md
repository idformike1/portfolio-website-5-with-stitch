# SYSTEM AUDIT: AISHA Portfolio (Technical Snapshot)

Generated on: 2026-03-23

## 1. File Tree (Recursive Map)
*Excluding node_modules and .git*

```text
.
├── README.md
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── blog-1-bg.jpg
│   ├── blog-2-bg.jpg
│   ├── aisha-hero.jpg
│   ├── credential-msc.jpg
│   ├── credential-rnutr.jpg
│   ├── credential-senr.jpg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── ... (other images)
├── src
│   ├── app
│   │   ├── about
│   │   │   └── page.tsx
│   │   ├── blog
│   │   │   └── page.tsx
│   │   ├── contact
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── services
│   │   │   └── page.tsx
│   │   └── work
│   │       └── page.tsx
│   ├── components
│   │   ├── global
│   │   │   ├── CustomCursor.tsx
│   │   │   └── SmoothScroll.tsx
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections
│   │   │   ├── AboutHero.tsx
│   │   │   ├── AboutSnippet.tsx
│   │   │   ├── BlogFeed.tsx
│   │   │   ├── BlogHero.tsx
│   │   │   ├── CoachingCollaborations.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactHero.tsx
│   │   │   ├── Credentials.tsx
│   │   │   ├── DiscoveryCTA.tsx
│   │   │   ├── Ethics.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ImpactStories.tsx
│   │   │   ├── MyStory.tsx
│   │   │   ├── ResourcesList.tsx
│   │   │   ├── ServicePackages.tsx
│   │   │   ├── ServicesHero.tsx
│   │   │   ├── ServicesSnippet.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── WorkHero.tsx
│   │   │   ├── WorkPortfolio.tsx
│   │   │   └── WorkTestimonials.tsx
│   │   └── ui
│   │       └── Magnetic.tsx
│   ├── data
│   │   └── mockData.ts
│   ├── hooks
│   │   └── useMagnetic.ts
│   └── lib
│       └── utils.ts
├── tsconfig.json
└── ...
```

## 2. Global Styles Audit
Primary theme configuration detected in `src/app/globals.css` and `src/app/layout.tsx`. 

> [!NOTE]
> The exact hex codes #E6E7D8 and #4F5844 were not found as literal strings. However, closely related colors are hardcoded in the Root Layout.

### Layout Inline Styles (`src/app/layout.tsx`):
```tsx
<body className={`${spaceGrotesk.variable} font-sans antialiased bg-[#6B705C] selection:bg-[#63cf17] selection:text-white`}>
  <div className="main-container ... bg-[#F0F0E8] ...">
    {children}
  </div>
</body>
```
*   `#6B705C`: Olive/Sage Green (Target: #4F5844)
*   `#F0F0E8`: Cream/Off-white (Target: #E6E7D8)

### Globals CSS (`src/app/globals.css`):
```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... oklch based system ... */
}
```

## 3. Component Map
| Component Name | File Location | Purpose |
| :--- | :--- | :--- |
| **Navbar** | `src/components/layout/Navbar.tsx` | Global navigation |
| **Footer** | `src/components/layout/Footer.tsx` | Global footer with reveal |
| **CustomCursor** | `src/components/global/CustomCursor.tsx` | GSAP-powered interaction cursor |
| **SmoothScroll** | `src/components/global/SmoothScroll.tsx` | Lenis smooth scrolling wrapper |
| **Magnetic** | `src/components/ui/Magnetic.tsx` | Framer Motion magnetic effect |
| **Hero** | `src/components/sections/Hero.tsx` | Landing page hero |
| **ContactForm** | `src/components/sections/ContactForm.tsx` | Interactive contact form |
| **WorkPortfolio** | `src/components/sections/WorkPortfolio.tsx` | Project listing grid |

## 4. Route Logic
The application utilizes Next.js App Router. Global providers and layout constraints are defined in `src/app/layout.tsx`.

### snippet: `src/app/layout.tsx`
```tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-[#6B705C]`}>
        <CustomCursor />
        <SmoothScroll>
          <div className="main-container min-h-screen relative overflow-x-clip bg-[#F0F0E8] max-w-[1440px] mx-auto shadow-2xl">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
```

## 5. Dependency Check
Key libraries powering the 'Snellenberg-style' motion experience:

| Library | Version | Role |
| :--- | :--- | :--- |
| **gsap** | `^3.14.2` | Core timeline animations |
| **@gsap/react** | `^2.1.2` | GSAP integration hook for React |
| **framer-motion** | `^12.38.0` | UI transitions and magnetic effects |
| **@studio-freight/lenis** | `^1.0.42` | Smooth scrolling engine |
| **next** | `16.1.7` | Framework engine |
| **tailwindcss** | `^4` | Styling (V4 architecture) |
