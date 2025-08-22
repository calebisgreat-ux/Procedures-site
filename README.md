# Procedures — Clean-Room Starter

This is a **from-scratch, original** starter template for a procedures/knowledge-base style site.  
It **does not** copy code, text, or assets from any existing site.

## What's inside
- Modern, responsive layout (pure HTML/CSS/JS)
- Sidebar list + searchable filter
- Hash-based client-side routing (no framework)
- Light/Dark theme toggle
- Easily editable data via `data/procedures.json`
- Configurable "NEW_LINK" button via `config.js`

## Quick start
1. Download and unzip the bundle.
2. Open `index.html` in your browser — it works locally.
3. Edit `data/procedures.json` to add your real procedures.
4. Set your custom URL in `config.js` by filling in `window.NEW_LINK`.
5. (Optional) Deploy:
   - **GitHub Pages**: Push the folder to a repo, enable Pages → set branch `main` and folder `/root` (or `/docs`). Add a `404.html` (already included) for SPA-style routing.
   - **Netlify** or **Vercel**: Drag-and-drop the folder; no build step required.

## Custom domain / new link
- If you want a new link like `https://yourname.github.io/procedures` or a custom domain you own:
  - GitHub Pages gives you `https://<username>.github.io/<repo>`
  - On Netlify/Vercel you get a free subdomain and can add your own domain.
- Put that URL into `config.js` so the "Open: NEW_LINK" button points there.

## Notes on copying sites
Cloning a website's **exact** content, design, or code without permission may violate copyright or terms.  
This template is an original baseline you can style to your taste.

## License
MIT — you can use, modify, and publish this template freely.
