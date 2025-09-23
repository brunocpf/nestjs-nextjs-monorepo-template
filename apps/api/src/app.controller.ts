import { Controller } from "@nestjs/common";
import { implement, Implement } from "@orpc/nest";

import { apiV1 } from "@workspace/types/contracts";

import { AppService } from "@/app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Implement(apiV1.hello.get)
  getHello() {
    return implement(apiV1.hello.get).handler(({}) => {
      return this.appService.getHello();
    });
  }
}
