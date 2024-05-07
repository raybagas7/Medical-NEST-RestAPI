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
  findAll() {
    return this.diseaseService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.diseaseService.findOneById(id);
  }

  @Get('user/:userId')
  findByPatientId(@Param('userId', ParseIntPipe) userId: number) {
    return this.diseaseService.findManyByPatientId(userId);
  }

  @Post()
  create(@Body() createDiseasedto: Prisma.DiseaseCreateInput) {
    return this.diseaseService.create(createDiseasedto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDisieaseDto: Prisma.DiseaseUpdateInput,
  ) {
    return this.diseaseService.update(id, updateDisieaseDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.diseaseService.delete(id);
  }
}
