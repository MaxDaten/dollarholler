import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter()
  },
  vitePlugin: {
    experimental: {
      // https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/config.md#inspector
      inspector: {
        toggleButtonPos: 'bottom-left',
        toggleKeyCombo: 'meta-shift',
        showToggleButton: 'active',
        holdMode: true
      }
    }
  }
};

export default config;
