# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Additional _Visual Studio Code_ Setup

1. CMD+Shift+P: `Preferences: Open User Settings (JSON)`
   ```json
       "svelte.language-server.runtime": "node",
   ```
   To setup the svelte extension to use the node in path (sadly user settings can't be provisioned via nix)

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Noteworthy Deviation from the Course

- Use self-hosted fonts via [fontsource](https://fontsource.org/fonts)
- Nixified dev environment including vscode & extensions
- Added experimental [vite inspector](https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#inspector)