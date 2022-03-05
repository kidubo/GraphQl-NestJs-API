import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmptyString } from '@nestjsi/class-validator';

@ArgsType()
export class GetUserArgs {
  @Field()
  @IsNotEmptyString()
  userId: string;
}
