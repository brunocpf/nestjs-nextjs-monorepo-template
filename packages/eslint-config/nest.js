// @ts-check
import { defineConfig } from "eslint/config";

import { config as baseConfig } from "./base.js";

export const config = defineConfig([...baseConfig]);
