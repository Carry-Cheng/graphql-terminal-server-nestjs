import { Injectable, CanActivate } from "@nestjs/common"
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class CatsGuard implements CanActivate {
    canActivate(context: GqlExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean> {
        GqlExecutionContext.create(context)
        return true
    }
}