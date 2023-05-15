import { Module } from '@nestjs/common';
import { GymPartsController } from './gym-parts.controller';
import { GymPartsService } from './gym-parts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GymParts } from 'src/gym-parts/gym-parts.model';

@Module({
  imports: [SequelizeModule.forFeature([GymParts])],
  controllers: [GymPartsController],
  providers: [GymPartsService],
  exports: [GymPartsService],
})
export class GymPartsModule {}
