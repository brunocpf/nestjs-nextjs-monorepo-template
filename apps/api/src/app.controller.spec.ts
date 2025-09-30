import { Test, TestingModule } from "@nestjs/testing";
import { describe, it, expect, beforeEach, vi } from "vitest";

import { apiV1 } from "@workspace/types/contracts";

import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getHello: vi.fn().mockReturnValue("Hello Test!"),
          },
        },
      ],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
  });

  it("should be defined", () => {
    expect(appController).toBeDefined();
  });

  it("should call AppService.getHello and return the result via contract handler", async () => {
    const contract = appController.getHello();
    const result = await contract.callable().call(appController);
    expect(result).toBe("Hello Test!");
  });

  it("should match the contract output type", async () => {
    const contract = appController.getHello();
    const result = await contract.callable()();
    expect(typeof result).toBe("string");
    const outputSchema = apiV1.hello.get["~orpc"].outputSchema!;
    const parseResult = outputSchema.safeParse(result);
    expect(parseResult.success).toBe(true);
  });
});
