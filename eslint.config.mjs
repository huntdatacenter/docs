import { defineConfig } from "eslint/config"
import pluginVue from "eslint-plugin-vue"
// import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript"
// import defineConfigWithVueTs from "@vue/eslint-config-typescript"
import js from "@eslint/js"
import eslint from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

// General JavaScript configuration
const jsConfig = {
  files: ["docs/.vitepress/theme/**/*.{js,mjs,cjs}"],
  languageOptions: {
    ecmaVersion: "latest",
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parserOptions: {
      ecmaVersion: "latest",
    },
  },
  plugins: { js },
  rules: {
    "brace-style": ["error", "1tbs"],
    curly: ["warn", "all"],
    "max-len": [
      "error",
      {
        code: 180,
        ignorePattern: ' d=".+"',
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    "no-debugger": "error",
    "no-param-reassign": "off",
    "no-prototype-builtins": "off",
    "sort-vars": "error",
  },
}

// Vue-specific configuration
const vueConfig = {
  files: ["docs/.vitepress/theme/**/*.vue"],
  // plugins: { vue: pluginVue },
  plugins: {
    "@typescript-eslint": tseslint.plugin,
  },
  languageOptions: {
    ecmaVersion: "latest",
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  rules: {
    // Vue-specific rules
    "vue/multi-word-component-names": "off",
    "vue/valid-v-slot": ["error", { allowModifiers: true }],
    "vue/v-slot-style": [
      "error",
      {
        atComponent: "v-slot",
        default: "v-slot",
        named: "longform",
      },
    ],
    // NOTE vue/no-deprecated-v-bind-sync is required for Vue 2 - remove if upgrading to Vue 3
    "vue/no-deprecated-v-bind-sync": ["warn"],
  },
}

// export default defineConfigWithVueTs([
export default defineConfig([
  {
    files: ["docs/.vitepress/theme/**/*.{js,mjs,cjs,ts,vue}"],
  },

  eslint.configs.recommended,

  // tseslint.configs.recommended,

  // Apply the recommended Vue 3 rules (essential, strongly-recommended, or recommended)
  // ...pluginVue.configs["flat/recommended"],
  ...pluginVue.configs["flat/essential"],

  // Base JavaScript configuration
  jsConfig,

  // Vue configuration
  vueConfig,
  // {
  //   // files: ["docs/.vitepress/theme/**/*.{js,mjs,vue}"],
  //   // files: ["**/*.{js,mjs,vue}"],

  //   // Specific settings for processing Vue files
  //   languageOptions: {
  //     ecmaVersion: "latest",
  //     sourceType: "module",
  //     globals: {
  //       ...globals.browser,
  //       ...globals.node,
  //     },
  //     // parserOptions: {
  //     //   parser: "@babel/eslint-parser", // Use Babel parser for JavaScript within <script>
  //     //   extraFileExtensions: [".vue"],
  //     // },
  //     parserOptions: {
  //       // ecmaVersion: 2022,
  //       sourceType: "module",
  //     },
  //   },

  //   rules: {
  //     // Override or add project-specific rules here
  //     "vue/no-unused-vars": "error",
  //     "vue/valid-v-slot": ["error", { allowModifiers: true }],
  //     "vue/v-slot-style": [
  //       "error",
  //       {
  //         atComponent: "v-slot",
  //         default: "v-slot",
  //         named: "longform",
  //       },
  //     ],
  //     // "vue/multi-word-component-names": "warn",
  //     "vue/multi-word-component-names": "off",
  //     "no-console": "warn",
  //   },
  // },
  {
    // Note: there should be no other properties in this object
    ignores: ["node_modules/**/*", "**/build/**/*.js", "**/cache/deps/"],
  },
])
