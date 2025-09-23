import { createORPCClient } from "@orpc/client";
import type { ContractRouterClient } from "@orpc/contract";
import type { JsonifiedClient } from "@orpc/openapi-client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";
import { createORPCReactQueryUtils } from "@orpc/react-query";

import { apiV1 } from "@workspace/types/contracts";

const link = new OpenAPILink(apiV1, {
  url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  headers: () => ({}),
  fetch: (request, init) => {
    return globalThis.fetch(request, {
      ...init,
      credentials: "include",
    });
  },
  interceptors: [],
});

export const orpcFetch: JsonifiedClient<ContractRouterClient<typeof apiV1>> =
  createORPCClient(link);

export const orpc = createORPCReactQueryUtils(orpcFetch);
