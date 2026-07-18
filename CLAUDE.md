# Dev Behaviour
Don't run server or do screenshots of the final site unless explictly told to.

# Fonts

Two font families are configured in [layout.tsx](src/app/layout.tsx):

- `font-sans` (Geist Sans, default body font) — used for the header wordmark ("The 42 Co." in [Header.tsx](src/components/Header.tsx)), all UI/nav text, and all headings (h1/h2/h3) on product pages ([ProductPage.tsx](src/components/ProductPage.tsx)).
- `font-serif` (Cormorant Garamond) — reserved for small, one-off brand-signature accents only: the vertical "The 42 Company" label in [Hero.tsx](src/components/Hero.tsx), and small italic tags like the "Coming Soon" label in [ProductPage.tsx](src/components/ProductPage.tsx).

The 42 Co. is a *functional* fragrance brand (science/utility-forward, e.g. "focus to activity" positioning), not an old-world/editorial perfume house. Large serif headings read as newspaper/luxury-editorial and undercut that positioning — so `font-serif` should not be used for headings or body copy, only for the narrow brand-accent uses above. When adding new headings or body text, default to `font-sans`.
