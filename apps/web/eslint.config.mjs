import { config } from "@workspace/eslint-config/next";

/** @type {import("eslint").Linter.Config} */
const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  ...config,
];

export default eslintConfig;
