"use client";

import { useQuery } from "@tanstack/react-query";

import { Button } from "@workspace/ui/components/button";

import { orpc } from "@/api-client/orpc";

export default function Page() {
  const { data, error, refetch, isFetching, isLoading, isPending } = useQuery(
    orpc.hello.get.queryOptions(),
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{data}</h1>
        <Button size="sm" onClick={() => refetch()} disabled={isFetching}>
          Refresh
        </Button>
        <div className="flex flex-col items-center gap-1">
          <div className="text-sm text-gray-500">
            {isFetching ? "Fetching..." : " "}
          </div>
          <div className="text-sm text-gray-500">
            {isLoading ? "Loading..." : " "}
          </div>
          <div className="text-sm text-gray-500">
            {isPending ? "Pending..." : " "}
          </div>
        </div>
      </div>
    </div>
  );
}
