---
name: Focus Pad
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464553'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777584'
  outline-variant: '#c8c4d5'
  surface-tint: '#544fc0'
  primary: '#1f108e'
  on-primary: '#ffffff'
  primary-container: '#3730a3'
  on-primary-container: '#a9a7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#511c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#752c00'
  on-tertiary-container: '#fe9562'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3b35a7'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb694'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a3003'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system is engineered for deep work and high-output productivity. It follows a **Modern Corporate** aesthetic with a "dense but calm" philosophy—maximizing information density without inducing cognitive overload. The target audience consists of professionals, data analysts, and researchers who require a tool that recedes into the background, allowing content to take center stage.

The style relies on structural integrity rather than decorative elements. It utilizes a restrained color palette, precise alignment, and subtle tonal shifts to guide the user's eye through complex data sets. The emotional response is one of clarity, reliability, and quiet efficiency.

## Colors
The palette is rooted in sophisticated neutrals to maintain a calm environment. 
- **Primary (Indigo 800):** Used sparingly for primary actions, active states, and critical progress indicators. It provides a purposeful "pop" against the slate backdrop.
- **Neutrals (Slate/Gray):** A multi-tiered scale of grays defines the UI structure. `Slate-900` for primary text, `Slate-500` for secondary metadata, and `Slate-200` for subtle borders.
- **Functional Colors:** Success and Error tones are desaturated slightly to fit the professional tone while remaining WCAG 2.1 AA compliant for accessibility.

## Typography
The system uses **Inter** for its exceptional legibility and neutral character. For data-heavy displays and metric tables, **JetBrains Mono** is introduced to ensure numerical alignment and technical precision.

Vertical rhythm is maintained through a strict 4px baseline grid. Body text primarily uses the `body-md` (14px) size to achieve high density while remaining readable. `label-caps` is reserved for table headers and section grouping to provide clear visual hierarchy without needing large font sizes.

## Layout & Spacing
This design system employs a **Fixed Grid** for dashboard views and a **Fluid Column** system for document-heavy views. 
- **The 4px Rule:** All spacing increments must be multiples of 4px.
- **Density:** Components use `sm` (8px) or `md` (16px) internal padding. 
- **Responsive Behavior:** 
  - **Desktop (1280px+):** 12-column grid, 32px margins. 
  - **Tablet (768px - 1279px):** 8-column grid, 24px margins. 
  - **Mobile (<768px):** 4-column grid, 16px margins. 

Data tables should use "Compact" (8px vertical cell padding) as the default state.

## Elevation & Depth
To maintain a clean and focused environment, this design system avoids heavy shadows. Depth is communicated primarily through **Tonal Layering** and **Low-Contrast Outlines**.

- **Level 0 (Background):** `Slate-50` or `White`.
- **Level 1 (Cards/Sidebar):** White surface with a 1px border of `Slate-200`. 
- **Level 2 (Dropdowns/Modals):** White surface, 1px border of `Slate-200`, and a soft "Ambient Shadow" (0px 4px 12px rgba(15, 23, 42, 0.08)).
- **Interactions:** Hover states should be indicated by a subtle background shift (e.g., `Slate-50` to `Slate-100`) rather than an increase in shadow depth.

## Shapes
The shape language is "Soft" and professional. A standard radius of `4px` (`0.25rem`) is applied to buttons, inputs, and small cards to take the edge off the technical density without appearing overly playful or consumer-oriented. Large containers like main content areas may use `8px` (`0.5rem`) to create a clear structural distinction.

## Components
- **Buttons:** Use solid indigo for primary actions. Secondary buttons use a white fill with a `Slate-200` border. Text should be `body-sm` weight 600.
- **Input Fields:** 1px `Slate-200` border, 8px padding. Focused state switches the border to `Primary-Indigo` with a 2px outer glow of the same color at 10% opacity.
- **Data Tables:** Row-based layouts with `Slate-100` bottom borders. Header cells use `label-caps` typography with a subtle gray background.
- **Metric Displays:** High-contrast `headline-lg` for the value, with `mono-data` for secondary change indicators (green for up, red for down).
- **Chips:** Small, rectangular with `2px` radius. Neutral gray backgrounds for categories, tinted primary for active filters.
- **Status Indicators:** Small 8px dots paired with text. Use functional colors (Success, Warning, Error) to indicate system health or task status.