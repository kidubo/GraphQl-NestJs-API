import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmptyString } from '@nestjsi/class-validator';

@ArgsType()
export class GetUsersArgs {
  // Inside here we specify the property we expect
  @Field()
  @IsNotEmptyString()
  userId: string;
  email: string;
  age: number;
  isSubscribed?: boolean;
}
