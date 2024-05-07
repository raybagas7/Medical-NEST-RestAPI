import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DiseaseService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.disease.findMany();
  }

  async findOneById(id: number) {
    return this.databaseService.disease.findUnique({
      where: {
        id,
      },
    });
  }

  async findManyByPatientId(patientId: number) {
    return this.databaseService.disease.findMany({
      where: {
        patientId,
      },
    });
  }

  async create(createDiseasedto: Prisma.DiseaseCreateInput) {
    return this.databaseService.disease.create({ data: createDiseasedto });
  }

  async update(id: number, updateDiseaseDto: Prisma.DiseaseUpdateInput) {
    return this.databaseService.disease.update({
      where: { id },
      data: updateDiseaseDto,
    });
  }

  async delete(id: number) {
    return this.databaseService.disease.delete({
      where: {
        id,
      },
    });
  }
}
