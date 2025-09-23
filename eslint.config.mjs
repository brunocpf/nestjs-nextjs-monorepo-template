// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
const config = {
  ignores: ["apps/**", "packages/**"],
  extends: ["@workspace/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};

export default config;
