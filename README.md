# 7Labz

Marketing site for [7Labz](https://7labz.io) — a digital product studio.

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui. Production target is [7labz.io](https://7labz.io) on Netlify. `netlify.toml` is configured for Next.js.

## Pages

- `/` — studio home with Flow Forge and Waypoint product demos
- `/work` — project index
- `/work/[slug]` — case studies (Flow Forge, Waypoint)
- `/services` — practices and engagements
- `/services/layout-system` — layout system design
- `/services/process` — process design
- `/studio` — point of view
- `/contact` — inquiry form
- `/start` — start a project

Contact and start-a-project forms validate in the browser and show a local success state. Markup is Netlify Forms-ready (`public/__forms.html`) for a future deploy.

## Run locally

Requires Node 22+.

```bash
npm install
npm run dev
```

The dev server binds to port 4317 on all interfaces. Open [http://127.0.0.1:4317](http://127.0.0.1:4317).

```bash
npm run build
npm start
```

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui

## Design

Dark charcoal ground (`#080605`) with orange-amber atmosphere (`#FF541C` / `#E8A317`) and frosted glass panels. Identity lockups live in `public/brand/`. Motion is cinematic: page transitions, section reveals, work morphs. `prefers-reduced-motion` turns movement off.
