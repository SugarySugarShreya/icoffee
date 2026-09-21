# iCoffee Google launch setup

## 1) Google Analytics 4
1. Create a GA4 web data stream for `https://www.icoffeex.com/`.
2. Copy the Measurement ID (`G-XXXXXXXXXX`).
3. Open `js/analytics.js` and replace the placeholder `G-XXXXXXXXXX` with the real ID.
4. Upload the updated file and test Realtime in GA4.

Tracked actions:
- `view_item` — iCoffee Black / iCoffee Creamer product-page view
- `select_item` — product CTA click for Black/Creamer
- `store_click` — click to the official IndusViva store, with location/product context

## 2) Google Search Console
Recommended verification: Domain property.
1. Open Google Search Console.
2. Add property: `icoffeex.com` (Domain property, covers the `www` host too).
3. Choose DNS verification and add Google's TXT record at your domain DNS provider.
4. After verification, submit:
   `https://www.icoffeex.com/sitemap.xml`

HTML fallback placeholder is present in `index.html`:
`<meta name="google-site-verification" content="PASTE_GOOGLE_SEARCH_CONSOLE_CODE_HERE">`
Only replace the placeholder if Google gives you an HTML meta-tag verification token. For Domain verification, the DNS TXT method is preferred and the meta tag is not required.

## 3) Conversion testing
Use GA4 DebugView or Realtime and click:
- Shop iCoffee Black
- Shop iCoffee Creamer
- Shop Now / official store links

Confirm the events above appear.

## 4) Indexing checklist
- [ ] Domain resolves on HTTPS.
- [ ] HTTP redirects to HTTPS.
- [ ] One canonical host is selected: `https://www.icoffeex.com` (apex `icoffeex.com` redirects to it).
- [ ] `robots.txt` is reachable.
- [ ] `sitemap.xml` is reachable and contains canonical URLs only.
- [ ] Search Console domain property is verified.
- [ ] Sitemap is submitted in Search Console.
- [ ] Request indexing for homepage and primary product pages.
- [ ] Check Page Indexing report for excluded/error pages.
- [ ] Check HTTPS and Core Web Vitals reports.
- [ ] Confirm no staging/placeholder domain is present.
- [ ] Confirm GA4 Realtime receives visits.
- [ ] Test Black, Creamer and Store conversion events.
- [ ] Re-check canonical URLs and structured data after deployment.

## 5) SEO landing-page architecture
The project includes dedicated, indexable landing pages:

These pages should link naturally to the two product pages, Ingredients, Science, How to Use and the official store. Avoid keyword stuffing and keep all product/health claims aligned with approved packaging and substantiated evidence.
