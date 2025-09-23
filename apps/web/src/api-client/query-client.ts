import type { ContractRouterClient } from "@orpc/contract";
import { createORPCReactQueryUtils } from "@orpc/react-query";
import { RouterUtils } from "@orpc/react-query";
import {
  isServer,
  QueryClient,
  defaultShouldDehydrateQuery,
} from "@tanstack/react-query";
import { createContext, use } from "react";

import { apiV1 } from "@workspace/types/contracts";

import { orpc as orpcClient } from "./orpc";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
        shouldRedactErrors: () => {
          return false;
        },
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export const orpc = createORPCReactQueryUtils(orpcClient);

type ORPCReactUtils = RouterUtils<ContractRouterClient<typeof apiV1>>;

export const ORPCContext = createContext<ORPCReactUtils | undefined>(undefined);

export function useORPC(): ORPCReactUtils {
  const orpc = use(ORPCContext);
  if (!orpc) {
    throw new Error("ORPCContext is not set up properly");
  }
  return orpc;
}
