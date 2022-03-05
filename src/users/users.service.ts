import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from './models/user';
import { CreateUserInput } from './Dto/Args/Input/create-user.input';
import { UpdateUserInput } from './Dto/Args/Input/update-user.input';
import { GetUsersArgs } from './Dto/Args/get-users.args';
import { GetUserArgs } from './Dto/Args/get-user.args';
import { DeleteUserInput } from './Dto/Args/Input/delete.user.input';

@Injectable()
// Injectable will allow us to input providers into the Service
//If you want to reach out to a data base this is the way
export class UsersService {
  private users: User[] = [];

  public createUser(createUserData: CreateUserInput): User {
    const user: User = {
      userId: uuidv4,
      ...createUserData,
    };

    this.users.push(user);

    return user;
  }

  public updateUser(updateUserData: UpdateUserInput): User {
    const user = this.users.find(
      (user) => user.userId === updateUserData.userId,
    );

    Object.assign(user, updateUserData);
    return user;
  }

  public getUser(getUserArgs: GetUserArgs): User {
    return this.users.find((user) => user.userId === getUserArgs.userId);
  }

  public getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs.userIds.map((userId) => this.getUser({ userId }));
  }

  public deleteUser(deleteUserData: DeleteUserInput): User {
    const userIndex = this.users.findIndex(
      (user) => user.userId === deleteUserData.userId,
    );
    const user = this.users[userIndex];
    this.users.splice(userIndex);
    return user;
  }
}
