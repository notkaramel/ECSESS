# ECSESS Website
> Made by ECSESS 2024-2025

# Tech stack:
- SvelteKit:
  - Start the project: [`sv`](https://github.com/sveltejs/cli).
    ```bash
    # create a new project in the current directory
    npx sv create
    ```
- Select:
  - JavaScript with JSDoc (sorry I don't like TypeScript)
  - TailwindCSS (incl. typography, forms)
  - [Svelte Adapter](https://svelte.dev/docs/kit/adapters): node
  - Package manager via `deno` (similar to `npm`, `yarn`, `pnpm`, and `bun`)

# Dev guide
- Start dev enviornment: (assume `deno`)
```bash
deno run dev

# or start the server and open the app in a new browser tab
deno run dev -- --open
```
- To create a production version of your app:
```bash
deno run build
deno run preview # to preview the production build
```