# iCoffee / IndusViva Static Site

Plain HTML + CSS + JavaScript version using the requested structure.

## Run locally
Open `index.html` in a browser. For best results use a local server (VS Code Live Server is ideal).

## Structure
- `index.html` homepage
- `pages/` secondary pages
- `assets/images/hero/` approved hero image
- `assets/images/products/` original product assets
- `assets/images/lifestyle/` ingredient/lifestyle assets
- `css/` styles
- `js/` interactions and animations
- `robots.txt`, `sitemap.xml`, `llms.txt` for crawl/discovery support

## Production
The production domain is `https://icoffeeindusviva.com/` in `index.html`, `robots.txt`, `sitemap.xml`, `llms.txt`, and page canonicals/structured data. Replace placeholder copy with final approved brand/legal copy.


## AEO
Added answer-first content, crawlable FAQ sections, FAQPage structured data on core informational pages, and optional SpeakableSpecification signals. AEO improves machine readability and answer extraction; it does not guarantee inclusion or ranking in any AI/search answer engine.


## Google launch readiness
- GA4-ready event tracking is in `js/analytics.js`; replace `G-XXXXXXXXXX` with the real Measurement ID.
- Search Console HTML verification placeholder is in `index.html`; DNS TXT verification is documented in `GOOGLE_SETUP.md`.
- Conversion events: `select_item` for Black/Creamer CTAs, `store_click` for official-store links, and `view_item` on product pages.
- SEO landing pages: `pages/functional-coffee.html`, `pages/botanical-coffee.html`, `pages/coffee-ritual.html`.
- Full launch/indexing checklist: see `GOOGLE_SETUP.md`.


## Growth layer added
- GA4 conversion tracking
- Search Console launch instructions
- Authority/brand reference page
- 10 educational journal landing pages
- Genuine-review intake page
- Conversion-focused CTA instrumentation
- Growth playbook for authority, content, reviews and CRO
