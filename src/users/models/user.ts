import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsNotNull } from '@nestjsi/class-validator';

@ObjectType()
export class User {
  @Field()
  userId: string;

  @Field()
  email: string;

  @Field(() => Int)
  @IsNotNull()
  age?: number;

  @Field({ nullable: true })
  isSubscribed?: boolean;
}
