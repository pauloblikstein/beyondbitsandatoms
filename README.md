# Beyond Bits & Atoms — course site

The public course site for **MSTU 5180 / 5181** (Beyond Bits & Atoms), Teachers College · Columbia University. Plain HTML / CSS / JS — no build step. The whole site is a single page; the top-nav (Course Info / Syllabus / Final Project / Office Hours / People) switches views in place.

## Publish to GitHub Pages

1. Create a new **public** repo on github.com.
2. Upload **the contents of this folder** so `index.html` sits at the repo root. Keep `.nojekyll`.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch: **main** · **/ (root)** → **Save**.
4. Live in ~30s at `https://<your-username>.github.io/<repo>/`.

## Files

| Path | What |
|---|---|
| `index.html` | The site (loads the components below) |
| `colors_and_type.css` | Design tokens + base styles |
| `styles.css` | Site layout & components |
| `*.jsx` | React components (Header, Hero, sections, inner pages) |
| `assets/` | Logos + project photos |

Fonts load from Google Fonts and React/Babel from unpkg — both work on GitHub Pages with no setup. (Babel compiles in-browser; fine for a course site, just a touch slower on first load.)
