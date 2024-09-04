import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  @ApiBody({type: LoginDto})//Define LoginDto para a estrutura do corpo da solicitação
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      body.username,
      body.password
    );
    if (!user) {
      //Handle authentication failure
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(body.username);
  }
}
