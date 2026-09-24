# iCoffee — www.icoffeex.com

Static site: plain HTML, CSS and JavaScript. No build step, no dependencies.

## Pages that exist

| Path | Purpose |
|---|---|
| `index.html` | Homepage |
| `pages/icoffee-black.html` | iCoffee Black product page |
| `pages/icoffee-creamer.html` | iCoffee Creamer product page |
| `pages/medical-disclaimer.html` | Medical disclaimer |
| `404.html` | Not-found page |

Ten empty (0-byte) journal files under `pages/journal/` were removed, along with
the 22 URLs in `sitemap.xml` that pointed at pages which were never built.
If journal content is written later, add the files **and** the sitemap entries together.

## Deploying

The site is a folder of static files — upload the whole directory as-is.

**GitHub Pages / Netlify / Cloudflare Pages:** `CNAME` already contains
`www.icoffeex.com`. Point the DNS record for `www` at your host, and set an apex
redirect so `icoffeex.com` → `https://www.icoffeex.com` (every canonical URL,
Open Graph tag and structured-data ID uses the `www` form).

Serve over HTTPS. Nothing else is required.

## Before you go live

1. **GA4** — `js/analytics.js` still contains `G-XXXXXXXXXX`. The script is
   guarded, so it does nothing at all until a real Measurement ID is pasted in.
   Tracked events: `view_item`, `select_item`, `store_click`.
2. **Search Console** — verify by DNS TXT record (see `GOOGLE_SETUP.md`). The
   empty HTML verification meta tag was removed rather than shipped as a
   placeholder; add one back only if you prefer file/meta verification.
3. **Store link** — every "Shop" button points at the Indusviva store URL. It is
   hard-coded in the HTML *and* in `js/store-link.js`. To change it everywhere,
   edit `ICOFFEE_STORE_URL` in that file.
4. **OG image** — add `assets/images/hero/og-icoffee-1200x630.jpg` (1200×630 px) before launch. All pages reference it for social sharing previews.

## Mobile

- Mobile styles are in `css/style.css` and `css/responsive.css` (media queries, tap-target sizing, overflow guards, safe-area insets, touch-hover neutralisation, reduced-motion support).
- The mobile hero (`css/responsive.css`, bottom of file) uses the portrait artwork with the headline, tagline and CTA overlaid. Do **not** use `image-set()` for that background — Chromium parses it but will not paint it, which blanks the hero.
- Mobile menu keyboard/outside-close behaviour is handled in `js/navigation.js`. The sticky shop bar is inline in each product page.

## Asset notes

- Mobile hero: served as `icoffee-mobile-hero.webp` (134 KB). The 1.8 MB PNG is
  kept alongside it as the design source.
- Brand film: re-encoded from 5.5 MB to 615 KB (audio removed — it plays muted).
  `icoffee-story-poster.webp` is its poster frame.
- 28 PNG duplicates (≈50 MB) have been removed from `assets/` — WebP versions are in use throughout the site.



## Footer (single source)
Edit `footer.template.html`, then run `python3 build-footer.py` to update every page.
Colour-contrast overrides live in `css/accessibility.css`.

## Mobile layout fixes (latest)

- **Product pages:** the `@media (max-width: 900px)` block for `.science-grid` / `.yoga-grid` was missing its declarations, so both grids never collapsed on phones (the third science card sat off-screen). Now valid: science → 1 column ≤900px, yoga → 1 column ≤640px. Phone typography for these cards lives in `css/mobile.css` (section 13a).
- **Directions steps:** `.directions-steps` is an `<ol>`; added `padding: 0` so the cards are centred.
- **FAQ:** `<summary>` now shows a + / × indicator (`css/style.css`); double padding removed on phones (`css/mobile.css`, section 12).
- **Sticky shop button:** on ≤600px it is a docked full-width bar (inline `<style>` in each product page). The scale/ring pulse is disabled there; the shine sweep remains.
- **Homepage "Why iCoffee":** on ≤760px the layout reads video → 01 → 02 → 03 → 04 (columns flattened with `display: contents` + `order`). The 9:16 film is shown in full (max 340px wide) instead of a 220px crop, and its overlay labels are hidden on phones because the film has its own baked-in branding. Desktop is unchanged.
- **Homepage hero (mobile):** the header stack (announcement 34px + nav 64px = 98px) floats over the hero, but the copy started at `top: 46–52px`, so the eyebrow and headline sat behind the nav. The copy is now anchored to `--hero-header` (98px) + 22px. Hero height is `min(100vw × 1.75, 700px)` (the artwork is 941×1671, so `cover` never crops the sides), the eyebrow stays on one line, and phones ≤340px get a slightly smaller CTA so it clears the product boxes.
- **Dead band under the hero on load:** `js/animations.js` revealed sections at 10% visibility, which a very tall section can't reach while only a sliver shows under the hero. The reveal threshold is now `0`, so the "A Smarter Cup…" section is visible immediately.
