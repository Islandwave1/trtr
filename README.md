
# IslandWave (Best Ever Build)

## What you have
- Premium UI (glass, gradients, animated buttons)
- **AI Assistant widget** (API stub at `/api/ai` – works without keys)
- **Community Feed** (Facebook-like posts with localStorage)
- **Support Lounge** (simple chat per browser tab)
- YouTube Live on Home & Live pages
- Plans, Sign Up, Portal, News, Events, Contact
- **Canada‑wide Legal**: Terms, Privacy (PIPEDA), AUP, Service Agreement
- Vercel-ready

## Deploy
1. `npm install`
2. `npm run dev` → http://localhost:3000
3. Or upload folder to Vercel (no env vars required for this demo).

## Upgrade path
- Replace `/pages/api/ai.js` to call your AI provider using an API key.
- Add authentication (Firebase/Clerk/NextAuth) and replace localStorage with a database (Supabase/Firebase/PlanetScale) for Community & Support.
- Add Stripe for billing (test mode first).

Enjoy!
