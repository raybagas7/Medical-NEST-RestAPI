import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // Get /users or /users?role=value
  findAll(@Query('role') role?: 'PATIENT' | 'DOCTOR') {
    return this.usersService.findAll(role);
  }

  @Get(':id') // GET /users/:id
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findOned(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  @Post() // POST /users
  create(@Body() createUserDto: Prisma.UsersCreateInput) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id') // PATCH /users/:id
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateUserDto: Prisma.UsersUpdateInput,
  ) {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
