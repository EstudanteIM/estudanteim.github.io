# Design System Strategy: The Scholastic Monolith

## 1. Overview & Creative North Star
**Creative North Star: The Institutional Archive**
This design system rejects the "playful startup" aesthetic in favor of "The Institutional Archive." We are building a digital environment that feels as permanent and authoritative as a university library, yet as precise as a modern research laboratory. 

To achieve this, the system moves away from traditional grid-bound "boxes" and instead utilizes **Intentional Asymmetry** and **Tonal Depth**. We break the "template" look by using exaggerated typographic scales and layering elements like physical sheets of vellum. The result is a high-trust, results-oriented interface that prioritizes focus, clarity, and academic rigor.

---

## 2. Colors
Our palette is anchored in deep, authoritative purples and professional blues, set against a sophisticated "off-white" foundation.

### The Palette
- **Primary (`#280091`):** The "Intelligence" core. Used for high-level branding and primary actions.
- **Secondary (`#2d6197`):** The "Trust" anchor. Used for supportive institutional elements.
- **Tertiary (`#1f2b49`):** The "Scholar" depth. Reserved for deep-focus backgrounds or data-heavy headers.
- **Neutral Foundation:** `surface` (`#f8f9fa`) and `surface-container` tiers provide a soft, non-fatiguing backdrop for long-form reading.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Layout boundaries must be established through:
1.  **Background Shifts:** Place a `surface-container-low` section against a `surface` background.
2.  **Tonal Transitions:** Use a 2px vertical "accent bar" of `primary` to denote the start of a section rather than a full box.

### Signature Textures & Glass
To provide a "bespoke" feel, use **Subtle Gradients** (Transitioning from `primary` to `primary_container`) for main CTAs. For floating navigation or modal overlays, implement **Glassmorphism**: use semi-transparent surface colors with a `24px` backdrop blur to maintain transparency and "breathability."

---

## 3. Typography
The typography system is designed to feel "Pedagogical." It mimics the hierarchy of a prestigious academic journal.

- **Display & Headlines (Plus Jakarta Sans):** Modern, wide, and assertive. Use `display-lg` for hero stats or critical outcomes to create an editorial "Monolith" feel.
- **Titles & Body (Manrope):** A geometric sans-serif that retains a humanistic touch. Manrope’s legibility at `body-md` (`0.875rem`) ensures that complex educational content remains accessible.
- **Labels (Inter):** Used for micro-copy and functional UI elements. Inter provides Swiss-style precision for data labels and button text.

**Hierarchy Tip:** Pair a `display-md` headline with a wide-margin `body-lg` paragraph. The contrast between the bold headline and the airy body text creates an "editorial" rather than "software" feel.

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering** rather than structural lines.

- **The Layering Principle:** Treat the UI as a stack of fine paper. 
    *   Background: `surface`
    *   Secondary Content Area: `surface-container-low`
    *   Primary Cards: `surface-container-lowest` (pure white)
- **Ambient Shadows:** When an element must "float" (like a dropdown or a critical modal), use a shadow tinted with `on-surface` at 6% opacity. Blur values should be high (`32px` to `64px`) to mimic natural, soft-box lighting.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons & CTAs
- **Primary:** Gradient-filled (`primary` to `primary_container`) with `xl` (0.75rem) roundedness. Typography must be `label-md` in semi-bold.
- **Institutional Secondary:** No fill. `outline_variant` at 20% opacity with `primary` text. This feels lighter but stays professional.

### Clean Cards
Forbid the use of divider lines within cards.
- **Structure:** Use `spacing-6` (1.5rem) as the standard internal padding. 
- **Separation:** Separate header and body text using a background shift to `surface-container-highest` for the header portion only.

### Data Visualization
- **Charts:** Use a palette of `secondary`, `tertiary`, and `primary_fixed_dim`. Avoid bright, neon "gamified" colors.
- **Tables:** Use `surface-container-low` for alternating rows. No vertical lines. Headers should be `label-sm` in all-caps with `0.05em` letter spacing.

### The "Monolith" Input
- **State:** Inputs use `surface_container_highest` backgrounds. On focus, the background transitions to `surface_container_lowest` with a 2px `primary` bottom-border only.

---

## 6. Do's and Don'ts

### Do:
- **Use White Space as a Tool:** Use `spacing-12` or `spacing-16` between major sections to give the content "academic gravity."
- **Nesting Tones:** Place `primary_container` text on `primary_fixed` backgrounds for low-contrast, high-sophistication alerts.
- **Intentional Asymmetry:** Align headlines to the left while offsetting body content to the right on large viewports to break the "standard SaaS" look.

### Don't:
- **Don't use "Gamified" elements:** No bouncy animations, no playful icons, no rounded "pill" shapes for buttons (use `xl` roundedness, not `full`).
- **Don't use 1px Dividers:** If you feel the need for a divider, increase the `spacing` scale by one increment instead.
- **Don't use Pure Black:** Always use `on_surface` (`#191c1d`) for text to maintain the soft-grey institutional vibe.

---

## 7. Spacing & Rhythm
Consistency is the key to trust. Use the **4px Baseline Power-of-Two** scale. 
- **Layout Margins:** Desktop `24` (6rem), Tablet `12` (3rem), Mobile `4` (1rem).
- **Component Gaps:** Always use `spacing-4` (1rem) as the default gap for stackable elements.