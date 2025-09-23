import { oc } from "@orpc/contract";
import z from "zod";

export const base = oc.errors({
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: "Internal Server Error",
    data: z.object({ errorId: z.string() }).optional(),
  },
});
