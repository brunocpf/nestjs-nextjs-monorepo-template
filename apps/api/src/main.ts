import { Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "@/app.module";
import { Env } from "@/env.schema";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  const configService = app.get(ConfigService<Env, true>);

  const config = new DocumentBuilder()
    .setTitle("API")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  const port = configService.get("PORT", { infer: true });

  Logger.log(`Starting server on port ${port}`, "Bootstrap");

  await app.listen(port);
}

bootstrap();
