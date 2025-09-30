import { defineConfig } from "vitest/config";

import baseConfig from "../vite.config";

export default defineConfig({
  ...baseConfig,
  test: {
    ...baseConfig.test,
    include: ["**/*.e2e-spec.ts"],
  },
  resolve: {
    alias: {
      "@": "../src",
    },
  },
});
