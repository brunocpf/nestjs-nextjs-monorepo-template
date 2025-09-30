import type { Config } from "jest";

import { config as baseConfig } from "./base";

export const config = {
  ...baseConfig,
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j|mj)s$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.(t|j|mj)s"],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
} as const satisfies Config;
