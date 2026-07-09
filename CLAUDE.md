# Fonts

Two font families are configured in [layout.tsx](src/app/layout.tsx):

- `font-sans` (Geist Sans, default body font) — used for the header wordmark ("The 42 Co." in [Header.tsx](src/components/Header.tsx)) and other UI/nav text.
- `font-serif` (Cormorant Garamond) — used for editorial/display text, e.g. the vertical "The 42 Company" label in [Hero.tsx](src/components/Hero.tsx).

When adding new text that should match the header wordmark, use `font-sans`, not `font-serif`.
