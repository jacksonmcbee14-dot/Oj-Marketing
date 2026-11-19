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
- `sitemap.xml` lists every indexable page. `thanks.html` and `404.html` are `noindex`.
- Olivia's bio in `about.html` is a one-line placeholder marked `TODO`.
