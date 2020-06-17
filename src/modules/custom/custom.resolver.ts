import { Resolver, Query } from "@nestjs/graphql"
import { CustomService } from "./custom.service"
import { CustomModuleVO } from "src/graphql.schema"

@Resolver('Custom')
export class CustomResolver {

    constructor(
        private readonly customService: CustomService
    ) {}

    @Query()
    async custom(): Promise<CustomModuleVO> {
        const custom: CustomModuleVO = {
            a: global.secretkey,
            b: await this.customService.getAllConfig()
        }
        return custom
    }

}