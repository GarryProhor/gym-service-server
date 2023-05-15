import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { GymParts } from './gym-parts.model';
import { IGymPartsFilter, IGymPartsQuery } from './types';

@Injectable()
export class GymPartsService {
  constructor(
    @InjectModel(GymParts)
    private gymParts: typeof GymParts,
  ) {}

  async paginateAndFilter(
    query: IGymPartsQuery,
  ): Promise<{ count: number; rows: GymParts[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;
    const filter = {} as Partial<IGymPartsFilter>;

    if (query.priceFrom && query.priceTo) {
      filter.price = {
        [Op.between]: [+query.priceFrom, +query.priceTo],
      };
    }

    if (query.gym) {
      filter.gym_manufacturer = JSON.parse(decodeURIComponent(query.gym));
    }

    if (query.parts) {
      filter.parts_manufacturer = JSON.parse(decodeURIComponent(query.parts));
    }

    return this.gymParts.findAndCountAll({
      limit,
      offset,
      where: filter,
    });
  }

  async bestsellers(): Promise<{ count: number; rows: GymParts[] }> {
    return this.gymParts.findAndCountAll({
      where: { bestseller: true },
    });
  }

  async new(): Promise<{ count: number; rows: GymParts[] }> {
    return this.gymParts.findAndCountAll({
      where: { new: true },
    });
  }

  async findOne(id: number | string): Promise<GymParts> {
    return this.gymParts.findOne({
      where: { id },
    });
  }

  async findOneByName(name: string): Promise<GymParts> {
    return this.gymParts.findOne({
      where: { name },
    });
  }

  async searchByString(
    str: string,
  ): Promise<{ count: number; rows: GymParts[] }> {
    return this.gymParts.findAndCountAll({
      limit: 20,
      where: { name: { [Op.like]: `%${str}%` } },
    });
  }
}
