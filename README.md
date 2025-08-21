
# IslandWave — Marketplace Build

## Included
- Premium UI + sticky nav with logo
- AI Assistant widget (client UI + API stub at `/api/ai`)
- Community Feed + Support Lounge (demo)
- **Marketplace**: search/filter, create listing, listing detail with ratings/reviews, verified badges, report + moderation queue (client demo)
- Live (YouTube), Plans, Sign Up, Portal, News, Events, Contact
- Canada‑wide legal: Terms, Privacy (PIPEDA), AUP, Service Agreement
- Vercel-ready; no env keys required for demo

## Deploy
- Upload the folder to Vercel → Deploy.
- Or locally: `npm install && npm run dev`

## Next Steps (production)
- Add Auth (Google via NextAuth) to verify users; store `verified=true` on profile.
- Database (Supabase/Firebase) to persist marketplace, posts, and reports.
- Payments/escrow (Stripe) for safe transactions.
- Admin role + moderation tools behind auth.
