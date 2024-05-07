import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { DiseaseModule } from './disease/disease.module';

@Module({
  imports: [UsersModule, DatabaseModule, DiseaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
