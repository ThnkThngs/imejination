Replace the current minimal Services strip with a richer four-card Services section. The About section was removed in the previous turn, so the new section sits between Work and Footer (still `id="services"`, still positioned right after Portfolio in `src/routes/index.tsx` — no order change needed).

## Cards
Four cards, each with title, description, and a CTA `Link` to `/brief` with `search={{ type: "<label>" }}`:

1. Aerial & Drone — "Cinematic drone footage and stills for townships, launches, and progress documentation." → `/brief?type=Aerial`
2. Architecture & Interior — "Designed-space photography for completed buildings, show units, and sales galleries." → `/brief?type=Architecture`
3. Property & Landscape — "Twilight shoots, lifestyle angles, and township-wide aerials for marketing collateral." → `/brief?type=Property`
4. Commercial & Still Life — "Food, product, and brand imagery for hospitality and F&B clients." → `/brief?type=Commercial`

## Implementation
- Rewrite `src/components/site/Services.tsx`:
  - Keep `id="services"`, dark background, mint dividers.
  - Section eyebrow + heading ("What we shoot" / "Disciplines"), matching the studio's existing display-serif + mint-accent type system.
  - 2-col (mobile) / 4-col (desktop) grid of cards. Each card: number index, title, short description, mint "Start a brief →" CTA `Link`.
  - Preserve the existing fade-up `useInView` reveal pattern.
- No changes to routing, brief route, Nav, or other components.