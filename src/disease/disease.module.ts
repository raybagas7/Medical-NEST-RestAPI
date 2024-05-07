import { Module } from '@nestjs/common';
import { DiseaseController } from './disease.controller';
import { DiseaseService } from './disease.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DiseaseController],
  providers: [DiseaseService],
})
export class DiseaseModule {}
