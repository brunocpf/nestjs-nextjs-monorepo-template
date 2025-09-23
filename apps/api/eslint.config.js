/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["@workspace/eslint-config/nest.js"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
};

export default config;
