import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmptyString } from '@nestjsi/class-validator';

@InputType()
export class DeleteUserInput {
  @Field()
  @IsNotEmptyString()
  userId: string;
}
