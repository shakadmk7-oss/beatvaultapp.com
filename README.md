# BeatVault

The website for **[beatvaultapp.com](https://beatvaultapp.com)**: music apps built by DJ Shaka D.

| App | Platform | Status |
|---|---|---|
| **BeatVault Music Player**: an offline music player with DJ features (tempo sync, crossfade, true shuffle) | Android | Closed testing, coming to Google Play |
| **BeatVault Visualiser**: real-time visuals that react to your music | Windows PC | Coming soon |

👉 **Want early access?** [Join the tester group](https://groups.google.com/g/beatvault-testers), then install the app from Google Play.

---

### About this repo
This is a plain static site (HTML + CSS) hosted free on GitHub Pages. The app source code is kept in a separate private repo.

- `index.html`: home page (products hub)
- `player/`: Music Player page, plus `player/privacy/`, the privacy URL to give Google Play
- `visualiser/`: Visualiser page
- `privacy/`: website privacy, with links to each app's policy
- `privacy.html`: redirects to `player/privacy/` (kept so old links still work)
- `CNAME`: points GitHub Pages at beatvaultapp.com

To add a product, copy the `player/` folder, edit it, and add a card to `index.html` and a link to `privacy/`.
