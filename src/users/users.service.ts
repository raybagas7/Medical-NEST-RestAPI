import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Ray Samudra',
      email: 'ray@aug.biz',
      role: 'PATIENT',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@doct.tv',
      role: 'DOCTOR',
    },
    {
      id: 3,
      name: 'Galih Ramadhan',
      email: 'galih@yesenia.net',
      role: 'PATIENT',
    },
    {
      id: 4,
      name: 'Ryan Permana',
      email: 'ryandita@kory.org',
      role: 'DOCTOR',
    },
    {
      id: 5,
      name: 'Annie Arina',
      email: 'arina@annie.ca',
      role: 'PATIENT',
    },
  ];

  findAll(role: 'PATIENT' | 'DOCTOR') {
    if (role) {
      const users = this.users.filter((user) => user.role === role);

      if (users.length === 0) {
        throw new NotFoundException(`No user attached to this role ${role}`);
      }
      return users;
    }

    return this.users;
  }

  findOned(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException('User Not Found');
    }

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });

    return this.findOned(id);
  }

  delete(id: number) {
    const removedUser = this.findOned(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
