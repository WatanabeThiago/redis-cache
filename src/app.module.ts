import { CacheModule, Module } from "@nestjs/common";
import * as redisStore from "cache-manager-redis-store";
import type { RedisClientOptions } from "redis";
import { AppController } from "./app.controller";

@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      isGlobal: true,
      store: redisStore,
      url: "redis://watanabe:17398520tT@@redis-11744.c256.us-east-1-2.ec2.cloud.redislabs.com:11744",
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}