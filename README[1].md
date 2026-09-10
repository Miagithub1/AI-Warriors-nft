# Aethelgard / AI Warriors Premium V4

This version uses the uploaded Aethelgard hero artwork and adds a Whitelist section.

Whitelist fields:
- Twitter/X username
- EVM wallet address

The form validates the username and EVM address and stores submissions in browser localStorage.
For a REAL shared whitelist database, connect the form to your backend, Google Apps Script, Supabase, Firebase, Formspree, or another webhook/database. No backend URL was supplied, so none was invented.

To configure social/mint links, edit app.js:
- MINT_URL
- SITE_LINKS.x
- SITE_LINKS.discord
- SITE_LINKS.opensea

For production NFT artwork, replace the showcase assets with your final 2K/4K collection and IPFS metadata.
