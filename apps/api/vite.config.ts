import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    passWithNoTests: true,
    clearMocks: true,
    include: ["**/*.spec.ts"],
    reporters: ["verbose"],
    testTimeout: 120000,
    coverage: {
      enabled: false,
      all: true,
      provider: "istanbul",
      include: ["src/**"],
      reporter: ["json-summary", "html"],
      reportsDirectory: "./coverage",
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    swc.vite({
      module: { type: "es6" },
    }),
  ],
});
