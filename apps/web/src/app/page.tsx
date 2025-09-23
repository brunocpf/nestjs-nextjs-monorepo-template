import { safe } from "@orpc/client";

import { Button } from "@workspace/ui/components/button";

import { orpc } from "@/api-client/orpc";

export default async function Page() {
  const { data, error } = await safe(orpc.hello.get());

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">{data}</h1>
        <Button size="sm">Button</Button>
      </div>
    </div>
  );
}
