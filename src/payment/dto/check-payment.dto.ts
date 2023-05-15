import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CheckPaymentDto {
  @ApiProperty({ example: '2bf44342-000f-5000-9000-1ed8f883c6ae' })
  @IsNotEmpty()
  readonly paymentId: number;
}
