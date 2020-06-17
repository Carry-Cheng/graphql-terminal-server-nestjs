import { Injectable } from "@nestjs/common"
import { getAllConfig } from "src/api"

@Injectable()
export class CustomService {
    async getAllConfig(): Promise<string> {
        const result = await getAllConfig()
        return result.responseData ?? JSON.stringify(result)
    }
}