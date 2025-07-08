"use client";

import { trpc } from "@/trpc/client"

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Hello from TRPC client!"
  });

  return (
    <div>
      Page client says: {data.greeting}
    </div>
  )
}