import { config as baseConfig } from "./base.js";

/** @type {import("eslint").Linter.Config} */
export const config = [
  ...baseConfig,
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];
