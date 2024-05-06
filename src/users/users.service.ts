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
  }

  async findOned(id: number) {
    return this.databaseService.users.findUnique({
      where: {
        id,
      },
    });
  }

  async create(createUserDto: Prisma.UsersCreateInput) {
    return this.databaseService.users.create({ data: createUserDto });
  }

  async update(id: number, updateUserDto: Prisma.UsersUpdateInput) {
    return this.databaseService.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async delete(id: number) {
    return this.databaseService.users.delete({
      where: {
        id,
      },
    });
  }
}
