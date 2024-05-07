import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
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
  async findById(@Param('id', ParseIntPipe) id: number) {
    const disease = await this.diseaseService.findOneById(id);

    if (!disease) {
      throw new NotFoundException('Disease Not Found');
    }

    return disease;
  }

  @Get('user/:userId')
  async findByPatientId(@Param('userId', ParseIntPipe) userId: number) {
    const disease = await this.diseaseService.findManyByPatientId(userId);

    if (disease.length === 0) {
      throw new NotFoundException('Disease Not Found');
    }

    return disease;
  }

  @Post()
  create(@Body() createDiseasedto: Prisma.DiseaseCreateInput) {
    return this.diseaseService.create(createDiseasedto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDisieaseDto: Prisma.DiseaseUpdateInput,
  ) {
    const disease = await this.findById(id);

    if (!disease) {
      throw new NotFoundException();
    }

    return this.diseaseService.update(id, updateDisieaseDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.diseaseService.delete(id);
  }
}
