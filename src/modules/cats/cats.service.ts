import { Injectable } from "@nestjs/common"
import { Cat } from "src/graphql.schema"

@Injectable()
export class CatsService {
    private cats: Array<Cat> = [
        { id: 1, name: 'Cat1', age: 5 },
        { id: 2, name: 'Cat2', age: 6 },
        { id: 3, name: 'Cat3', age: 7 },
        { id: 4, name: 'Cat4', age: 8 },
        { id: 5, name: 'Cat5', age: 9 }
    ]

    create(cat: Cat): Cat {
        cat.id = this.cats.length + 1
        this.cats.push(cat)
        return cat
    }

    findAll(): Array<Cat> {
        return this.cats
    }

    findOneById(id: number): Cat {
        return this.cats.find(cat => cat.id === id)
    }
}