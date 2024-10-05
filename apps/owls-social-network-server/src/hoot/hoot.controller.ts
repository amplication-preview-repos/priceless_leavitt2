import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HootService } from "./hoot.service";
import { HootControllerBase } from "./base/hoot.controller.base";

@swagger.ApiTags("hoots")
@common.Controller("hoots")
export class HootController extends HootControllerBase {
  constructor(
    protected readonly service: HootService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
