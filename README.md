# OJ Marketing website

A static site for GitHub Pages: home, services hub, one page per service (social media, Google & Meta ads, video), pricing, free audit, about and contact.

## Things to fill in

| What | Where |
|---|---|
| Brand colors | Matched to the Sales HQ app. Tokens at top of `styles.css` |
| Logo | Orange-slice mark from the app, `assets/logo.svg` |
| Headshots | Jackson done. Add `assets/headshots/olivia.jpg` (portrait, about 4:5). They show up automatically |
| Business email | `ojmarketingoffice@gmail.com` (also the form `action`, so audit requests go there) |
| Jackson's personal email | Search for `jacksonmcbee14@gmail.com` |
| Bios | `about.html`, the bracketed text |

## Audit form

The form posts to [FormSubmit](https://formsubmit.co), which emails each submission to the address in the form's `action`. The **first** submission sends a one-time confirmation email to that address. Click the link in it, and every submission after that is delivered.

## Publishing on GitHub Pages

The site deploys from the `gh-pages` branch at **https://theojmedia.com/** (the `CNAME` file sets the custom domain).
The old address `jacksonmcbee14-dot.github.io/Oj-Marketing/` redirects there automatically.

DNS at the registrar: four `A` records on `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153,
and a `CNAME` on `www` → `jacksonmcbee14-dot.github.io`.

## SEO notes

- Every page has a unique title, meta description, canonical, share image (`assets/og-image.png`) and schema.org JSON-LD (business, services with prices, people, breadcrumbs).
- Pages with a visible FAQ also carry `FAQPage` JSON-LD. Google stopped showing FAQ rich results in May 2026 but still reads the markup. **If you edit a FAQ, edit the matching JSON-LD in that page's `<head>` too**, so they stay identical.
- Business hours (Mon–Fri 9 AM–6 PM) appear in the homepage schema, the footer and the contact page. Keep them in sync with Google Business Profile, Bing Places and Yelp.
- `sitemap.xml` lists every indexable page. `thanks.html` and `404.html` are `noindex`. Update `lastmod` when a page's content changes.

## IndexNow (Bing / Copilot)

`29ad2aa3d598c4e2563621a8da26a5b1.txt` is the IndexNow key file. Don't delete it. After publishing changes, ping Bing so it re-crawls right away:

```
https://www.bing.com/indexnow?url=https://theojmedia.com/CHANGED-PAGE.html&key=29ad2aa3d598c4e2563621a8da26a5b1
```
