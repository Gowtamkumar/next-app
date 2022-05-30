import { Body, Controller, Delete, Get, Post, Request, Response, UseGuards } from "@nestjs/common";
// import { Response } from "express";
import { UserDto } from "../../user/dtos/user.dto";
import { CurrentUser } from "../decorators/current-user.decorator";
import { LoginDto } from "../dtos/login.dto";
import { RegisterDto } from "../dtos/register.dto";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { AuthService } from "../services/auth.service";


@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) { }

  @Post('/register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('/login')
  login(@Request() req, @Body() loginDto: LoginDto, @Response() res,) {
    return this.authService.login(loginDto, req, res);
  }

  // @UseGuards(AuthGuard())
  @Delete('/logout')
  logout(@Request() req, @Response() res) {
    return this.authService.logout(res, req)
  }


  @UseGuards(JwtAuthGuard)
  @Get('/me')
  getMe(@CurrentUser() user: UserDto) {
    return this.authService.getMe(user);
  }
}