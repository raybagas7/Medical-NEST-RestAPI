import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // Get /users or /users?role=value
  findAll(@Query('role') role?: 'PATIENT' | 'DOCTOR') {
    return this.usersService.findAll(role);
  }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOned(+id); // convert the string to number using Unary
  }

  @Post() // POST /users
  create(
    @Body() user: { name: string; email: string; role: 'PATIENT' | 'DOCTOR' },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role: 'PATIENT' | 'DOCTOR';
    },
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
