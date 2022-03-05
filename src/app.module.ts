// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';

// @Module({
//   imports: [
//     GraphQLModule.forRoot<ApolloDriverConfig>({
//       driver: ApolloDriver,
//       debug: false,
//       playground: false,
//     }),
//     UsersModule,
//   ],
// })
// export class AppModule {}

// import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { UsersModule } from './users/users.module';

// @Module({
//   imports: [
//     GraphQLModule.forRoot<ApolloDriverConfig>({
//       driver: ApolloDriver,
//       autoSchemaFile: true,
//     }),
//     UsersModule,
//   ],
// })
// export class AppModule {}

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UsersModule,
  ],
})
export class AppModule {}
