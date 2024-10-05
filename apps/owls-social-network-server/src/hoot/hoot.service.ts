import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HootServiceBase } from "./base/hoot.service.base";

@Injectable()
export class HootService extends HootServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
