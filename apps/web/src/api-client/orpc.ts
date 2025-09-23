import { createORPCClient } from "@orpc/client";
import type { ContractRouterClient } from "@orpc/contract";
import type { JsonifiedClient } from "@orpc/openapi-client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";

import { apiV1 } from "@workspace/types/contracts";

const link = new OpenAPILink(apiV1, {
  url: process.env.API_URL || "http://localhost:3000",
  headers: () => ({
    "x-api-key": "my-api-key",
  }),
  fetch: (request, init) => {
    return globalThis.fetch(request, {
      ...init,
      credentials: "include", // Include cookies for cross-origin requests
    });
  },
  interceptors: [],
});

export const orpc: JsonifiedClient<ContractRouterClient<typeof apiV1>> =
  createORPCClient(link);
