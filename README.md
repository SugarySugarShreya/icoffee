# iCoffee by IndusViva — www.icoffeex.com

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
3. **Store link** — every "Shop" button points at the IndusViva store URL. It is
   hard-coded in the HTML *and* in `js/store-link.js`. To change it everywhere,
   edit `ICOFFEE_STORE_URL` in that file.
4. **Claims review** — the product pages, the FAQ structured data and the brand
   film make therapeutic statements ("formulated for serious blood sugar
   support", "helps regulate blood sugar", "supports insulin sensitivity", plus
   FAQ answers about diabetes and pregnancy). Under FSSAI rules a food product
   generally cannot carry disease-management claims. Have this reviewed before
   launch — it is the one outstanding item that is not a code problem.

## Mobile

- `css/mobile.css` loads last on every page and holds the mobile layer:
  tap-target sizing, overflow guards, `svh` units, safe-area insets, touch-hover
  neutralisation and reduced-motion support.
- The mobile hero (`css/responsive.css`, bottom of file) uses the portrait
  artwork with the headline, tagline and CTA overlaid. Do **not** use
  `image-set()` for that background — Chromium parses it but will not paint it,
  which blanks the hero.
- `js/mobile.js` adds the sticky shop bar, menu keyboard/outside-close
  behaviour, and defers the brand film on phones and slow connections.

## Asset notes

- Mobile hero: served as `icoffee-mobile-hero.webp` (134 KB). The 1.8 MB PNG is
  kept alongside it as the design source.
- Brand film: re-encoded from 5.5 MB to 615 KB (audio removed — it plays muted).
  `icoffee-story-poster.webp` is its poster frame.
- Roughly 40 MB of `assets/` is unreferenced — mostly PNG duplicates of WebPs
  already in use. Harmless to keep; safe to delete if you want a leaner repo.
