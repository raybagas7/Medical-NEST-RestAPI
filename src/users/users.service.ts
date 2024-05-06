import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll(role?: 'PATIENT' | 'DOCTOR') {
    if (role)
      return this.databaseService.users.findMany({
        where: {
          role,
        },
      });

    return this.databaseService.users.findMany();
    // if (role) {
    //   const users = this.users.filter((user) => user.role === role);
    //   if (users.length === 0) {
    //     throw new NotFoundException(`No user attached to this role ${role}`);
    //   }
    //   return users;
    // }
    // return this.users;
  }

  async findOned(id: number) {
    return this.databaseService.users.findUnique({
      where: {
        id,
      },
    });
    // const user = this.users.find((user) => user.id === id);
    // if (!user) {
    //   throw new NotFoundException('User Not Found');
    // }
    // return user;
  }

  async create(createUserDto: Prisma.UsersCreateInput) {
    return this.databaseService.users.create({ data: createUserDto });
    // const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    // const newUser = {
    //   id: usersByHighestId[0].id + 1,
    //   ...createUserDto,
    // };
    // this.users.push(newUser);
    // return newUser;
  }

  async update(id: number, updateUserDto: Prisma.UsersUpdateInput) {
    return this.databaseService.users.update({
      where: { id },
      data: updateUserDto,
    });
    // this.users = this.users.map((user) => {
    //   if (user.id === id) {
    //     return { ...user, ...updateUserDto };
    //   }
    //   return user;
    // });
    // return this.findOned(id);
  }

  async delete(id: number) {
    return this.databaseService.users.delete({
      where: {
        id,
      },
    });
    // const removedUser = this.findOned(id);
    // this.users = this.users.filter((user) => user.id !== id);
    // return removedUser;
  }
}
