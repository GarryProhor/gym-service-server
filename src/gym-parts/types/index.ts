import { faker } from '@faker-js/faker';
import { Op } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

class GymParts {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  gym_manufacturer: string;

  @ApiProperty({ example: 12345 })
  price: string;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  parts_manufacturer: string;

  @ApiProperty({ example: faker.internet.password() })
  vendor_code: string;

  @ApiProperty({ example: faker.lorem.word() })
  name: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  description: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  compatibility: string;

  @ApiProperty({ example: faker.image.city() })
  images: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: true })
  bestseller: boolean;

  @ApiProperty({ example: false })
  new: boolean;

  @ApiProperty({ example: 123 })
  popularity: number;

  @ApiProperty({ example: '2023-05-15T19:46:45.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-05-15T19:46:45.000Z' })
  updatedAt: string;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: GymParts, isArray: true })
  rows: GymParts;
}

export class Bestsellers extends GymParts {
  @ApiProperty({ example: true })
  bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: GymParts, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends GymParts {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: GymParts, isArray: true })
  rows: NewParts;
}

export class SearchByLetterResponse extends GymParts {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse;
}

export class SearchRequest {
  @ApiProperty({ example: 'r' })
  search: string;
}

export class GetByNameResponse extends GymParts {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class GetByNameRequest {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class FindOneResponse extends GymParts {}

export interface IGymPartsQuery {
  limit: string;
  offset: string;
  gym: string | undefined;
  parts: string | undefined;
  priceFrom: string | undefined;
  priceTo: string | undefined;
}

export interface IGymPartsFilter {
  gym_manufacturer: string | undefined;
  parts_manufacturer: string | undefined;
  price: { [Op.between]: number[] };
}
