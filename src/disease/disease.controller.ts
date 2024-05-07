import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { DiseaseService } from './disease.service';
import { Prisma } from '@prisma/client';

@Controller('disease')
export class DiseaseController {
  constructor(private readonly diseaseService: DiseaseService) {}

  @Get()
  findAll() {}

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {}

  @Get('user/:userId')
  findByUserId(@Param('userId', ParseIntPipe) userId: number) {}

  @Post()
  create(@Body() createDiseasedto: Prisma.DiseaseCreateInput) {}

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDisieaseDto: Prisma.DiseaseUpdateInput,
  ) {}

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {}
}
