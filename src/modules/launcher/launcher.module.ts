import { Module } from "@nestjs/common"
import { LauncherService } from "./launcher.service"

@Module({
    providers: [LauncherService]
})
export class LauncherModule {
    constructor(
        private readonly launcherService: LauncherService
    ) {
        launcherService.getSecretKey()
    }
}