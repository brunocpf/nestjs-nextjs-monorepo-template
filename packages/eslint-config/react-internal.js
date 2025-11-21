// @ts-check
import { defineConfig } from "eslint/config";

import { config as nextConfig } from "./next.js";

export const config = defineConfig([...nextConfig]);
