# OJ Marketing website

A static site for GitHub Pages: a single landing page (`index.html`) plus an About page (`about.html`).

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

Repo **Settings → Pages → Build and deployment → Deploy from a branch**, pick the branch and `/ (root)`.
The site will be at `https://jacksonmcbee14-dot.github.io/Oj-Marketing/`.
