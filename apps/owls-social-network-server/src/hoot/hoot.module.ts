import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HootModuleBase } from "./base/hoot.module.base";
import { HootService } from "./hoot.service";
import { HootController } from "./hoot.controller";
import { HootResolver } from "./hoot.resolver";

@Module({
  imports: [HootModuleBase, forwardRef(() => AuthModule)],
  controllers: [HootController],
  providers: [HootService, HootResolver],
  exports: [HootService],
})
export class HootModule {}
