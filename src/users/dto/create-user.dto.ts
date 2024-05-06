import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['PATIENT', 'DOCTOR'], {
    message: 'Valid role required',
  })
  role: 'PATIENT' | 'DOCTOR';
}
