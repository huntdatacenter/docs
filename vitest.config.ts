import { fileURLToPath } from "node:url"

import {
  configDefaults,
  defineConfig,
  // mergeConfig,
} from "vitest/config"

import vue from "@vitejs/plugin-vue"
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"

// import viteConfig from './vite.config';

/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
// export default mergeConfig(
//   viteConfig({ command: 'serve', mode: '' }),
//   defineConfig({
//   ...
//   })
// );
export default defineConfig({
  // VitePress builds with `docs` as its Vite root, so absolute asset URLs
  // (/img/...) resolve against docs/public. Vitest's root is the repo root,
  // so point publicDir at the same directory to match dev/build behaviour.
  publicDir: fileURLToPath(new URL("./docs/public", import.meta.url)),
  // Resolver
  resolve: {
    // https://vitest.dev/config/#alias
    alias: {
      "@": fileURLToPath(new URL("./pages/.vitepress", import.meta.url)),
      "~": fileURLToPath(new URL("./node_modules", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  test: {
    setupFiles: ["./tests/setup.ts"],
    environment: "happy-dom",
    exclude: [...configDefaults.exclude],
    globals: true,
    root: fileURLToPath(new URL("./", import.meta.url)),
    // https://vuetifyjs.com/en/getting-started/unit-testing/
    server: {
      deps: {
        inline: ["vuetify"],
      },
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    vuetify({ autoImport: true }),
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       api: 'modern-compiler',
  //       additionalData: `@import "./pages/.vitepress/theme/variables.scss";`,
  //     },
  //   },
  // },
})
