import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { REQUEST } from "@nestjs/core";
import { ORPCModule } from "@orpc/nest";

import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { envSchema } from "@/env.schema";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env", ".env.local"],
      validate: (config: Record<string, string>) => {
        return envSchema.parse(config);
      },
    }),
    ORPCModule.forRootAsync({
      useFactory: (request: Request) => ({
        interceptors: [],
        context: { request },
        eventIteratorKeepAliveInterval: 5000,
      }),
      inject: [REQUEST],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
