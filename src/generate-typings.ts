import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'path'

const definitionsFactory = new GraphQLDefinitionsFactory()
definitionsFactory.generate({
    typePaths: ['./src/modules/**/*.graphql'],
    path: join(process.cwd(), 'src/graphql.schema.ts'),
    outputAs: 'class',
    /// file watch mode
    /// watch property is true
    watch: true
})

/// you can run this command: ts-node generate-typings
