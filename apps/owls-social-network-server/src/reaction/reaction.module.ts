import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReactionModuleBase } from "./base/reaction.module.base";
import { ReactionService } from "./reaction.service";
import { ReactionController } from "./reaction.controller";
import { ReactionResolver } from "./reaction.resolver";

@Module({
  imports: [ReactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReactionController],
  providers: [ReactionService, ReactionResolver],
  exports: [ReactionService],
})
export class ReactionModule {}
