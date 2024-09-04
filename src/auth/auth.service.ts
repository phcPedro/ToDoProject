import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    //Validação no banco de dados no futuro
    //Simular validação
    const user = { username: 'test', password: '$2b$10$...' }; //senha criptografada
    if (
      username === user.username &&
      (await bcrypt.compare(password, user.password))
    ) {
      return user;
    }
    return null;
  }
  async login(username: string): Promise<{ access_token: string }> {
    const payload = { username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
