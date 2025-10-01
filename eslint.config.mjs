import { config as baseConfig } from "@workspace/eslint-config/ts-lib";

/** @type {import("eslint").Linter.Config} */
const config = [
  ...baseConfig,
  {
    ignores: [
      "apps/**",
      "packages/**",
      "services/**",
      "eslint.config.mjs",
      "lint-staged.config.mjs",
      "prettier.config.mjs",
    ],
  },
];

export default config;
