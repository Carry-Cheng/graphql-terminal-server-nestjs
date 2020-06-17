import { Min } from 'class-validator'
import { CreateCatInput } from 'src/graphql.schema'

export class CreateCatDTO extends CreateCatInput {
    @Min(1)
    age: number
    name: string
}