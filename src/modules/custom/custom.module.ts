import { Module } from "@nestjs/common"
import { CustomResolver } from "./custom.resolver"
import { CustomService } from "./custom.service"

@Module({
    providers: [CustomResolver, CustomService]
})
export class CustomModule {}