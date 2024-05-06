import { Injectable } from '@nestjs/common';

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

  findAll(role: 'PATIENT' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOned(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: { name: string; email: string; role: 'PATIENT' | 'ADMIN' }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role: 'PATIENT' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
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
