import z from "zod";

import { base } from "./base";

export const getHelloContract = base
  .route({
    method: "GET",
    path: "/v1/hello",
  })
  .output(z.string());

export const hello = {
  get: getHelloContract,
};
