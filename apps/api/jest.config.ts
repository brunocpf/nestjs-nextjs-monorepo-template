import type { Config } from "jest";

import { config } from "@workspace/jest-config/nest";

export default {
  ...config,
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/$1",
  },
} as const satisfies Config;
