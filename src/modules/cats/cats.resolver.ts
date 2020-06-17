import { UseGuards, ParseIntPipe } from "@nestjs/common"
import { Resolver, Query, Args, Mutation, Subscription } from "@nestjs/graphql"
import { PubSub } from 'graphql-subscriptions'
import { CatsService } from "./cats.service"
import { CatsGuard } from "./cats.guard"
import { Cat } from "src/graphql.schema"
import { CreateCatDTO } from "./dto/create-cat.dto"


const pubSub = new PubSub()

@Resolver('Cat')
export class CatsResolver {
    constructor(
        private readonly catsService: CatsService
    ) {}

    @Query()
    @UseGuards(CatsGuard)
    async getCats(): Promise<Array<Cat>> {
        return await this.catsService.findAll()
    }

    @Query()
    async findOneById(
        @Args('id', ParseIntPipe) id: number
    ): Promise<Cat> {
        return await this.catsService.findOneById(id)
    }

    @Mutation('createCat')
    async createCat(
        @Args('createCatInput') args: CreateCatDTO
    ): Promise<Cat> {
        const createdCat = this.catsService.create(args)
        pubSub.publish('catCreated', { catCreated: createdCat })
        return createdCat
    }

    @Subscription('catCreated')
    catCreated(): AsyncIterator<unknown, any, undefined> {
        return pubSub.asyncIterator('catCreated')
    }

}