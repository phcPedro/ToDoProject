import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description:' Faça seu login aqui',
    example: 'test',
  })
  username: string;

  @ApiProperty({
    description: 'Coloque sua senha aqui',
    example: '$2b$10$...',
  })
  password: string;
}
