import { Test, TestingModule } from "@nestjs/testing";

import { apiV1 } from "@workspace/types/contracts";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = moduleRef.get<AppController>(AppController);
    appService = moduleRef.get<AppService>(AppService);
  });

  it("should be defined", () => {
    expect(appController).toBeDefined();
  });

  it("should call AppService.getHello and return the result via contract handler", async () => {
    const spy = jest
      .spyOn(appService, "getHello")
      .mockReturnValue("Hello Test!");
    const contract = appController.getHello();
    const result = await contract.callable()();
    expect(spy).toHaveBeenCalled();
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
