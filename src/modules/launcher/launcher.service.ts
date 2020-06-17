import { Injectable } from "@nestjs/common"
import { getSecretKey } from 'src/api'
@Injectable()
export class LauncherService {
    getSecretKey(): void {
        getSecretKey().then(res => {
            if (res) {
                global.secretkey = res.responseData ?? JSON.stringify(res)
            }
        })
    }
}
