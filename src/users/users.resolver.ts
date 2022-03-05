import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetUserArgs } from '../users/Dto/Args/get-user.args';
import { CreateUserInput } from './Dto/Args/Input/create-user.input';
import { DeleteUserInput } from './Dto/Args/Input/delete.user.input';
import { User } from './models/user';
import { UsersService } from './users.service';
import { UpdateUserInput } from './Dto/Args/Input/update-user.input';
import { GetUsersArgs } from '../users/Dto/Args/get-users.args';
@Resolver(() => User)
//This takes in a function that return the type of the resolver that responsible for resolving
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.usersService.getUser(getUserArgs);
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.usersService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.usersService.createUser(createUserData);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.usersService.updateUser(updateUserData);
  }

  @Mutation(() => User)
  deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
    return this.usersService.deleteUser(deleteUserData);
  }
}
