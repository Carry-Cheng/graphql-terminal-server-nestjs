import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { CatsModule } from './modules/cats/cats.module'
import { LauncherModule } from './modules/launcher/launcher.module'
import { CustomModule } from './modules/custom/custom.module'

@Module({
  imports: [
    CatsModule,
    LauncherModule,
    CustomModule,
    GraphQLModule.forRoot({
      typePaths: ['./src/modules/**/*.graphql'],
      installSubscriptionHandlers: true
    })
    /// 
    /// you can choose async transform mode. 
    /// `useFactory`
    /// you can also choose async by `inject` injection dependency.
    /// `useClass`
    // GraphQLModule.forRootAsync({
    //   useFactory: () => ({
    //     typePaths: ['./**/*.graphql']
    //   })
    // })
  ]
})
export class AppModule {}
