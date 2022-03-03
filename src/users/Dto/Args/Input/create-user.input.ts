import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmailTidy,
  IsNotEmptyString,
  IsNotNull,
} from '@nestjsi/class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmptyString()
  @IsEmailTidy()
  email: string;

  @Field()
  @IsNotNull()
  age: number;
}
