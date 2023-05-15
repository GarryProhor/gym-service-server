import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Garry' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'garry123' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'garry@gmail.com' })
  @IsNotEmpty()
  readonly email: string;
}
