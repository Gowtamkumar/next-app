import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService, JwtSignOptions, JwtVerifyOptions } from "@nestjs/jwt";
// import { Response } from "express";
import { CreateUserDto } from "../../user/dtos/create-user.dto";
import { UserDto } from "../../user/dtos/user.dto";
import { UserService } from "../../user/services/user.service";
import { LoginDto } from "../dtos/login.dto";
import { RegisterDto } from "../dtos/register.dto";
import { decode } from "punycode";

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) { }


  async register(registerDto: RegisterDto) {
    const user = await this.userService.createUser(registerDto as CreateUserDto);
    const token = this.generatedSignedJwt(user);
    return { token, user };
  }


  async login(loginDto: LoginDto, req, res) {
    const { username, password } = loginDto;



    const user = await this.userService.validateCredentials(username, password);

    if (!user) {
      throw new UnauthorizedException('Invalid Login Credentials');
    }
    const token = this.generatedSignedJwt(user)

    const options = {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      // secure: config.SSL && config.NODE_ENV === env_mode.PRODUCTION
    };

    return res
      .cookie('token', token, options)
      .cookie('accessToken', token, { ...options, httpOnly: true })
      .send({ token, success: true, message:'Login Successfull' });
  }


  logout(res, req) {
    Object.entries(req.cookies).forEach(([key, value]) => res.clearCookie(key));
    return res
      .send({ success: true })

  }



  async getMe(user: UserDto) {
    return user;
  }


  private generatedSignedJwt(user) {
    const jwtSignOptions: JwtSignOptions = {
      subject: user.id
    }
    return this.jwtService.sign({}, jwtSignOptions)
  }

  private decodeJwt(token) {
    const jwtVerifyOptions: JwtVerifyOptions = {
      // audience: 'you',
      // issuer: 'me',
      // ignoreExpiration: true,
      // jwtid: 'token.id',
      // subject: 'user.id'
    };
    try {
      return this.jwtService.verify(token);
    }
    catch (err) {
      // if(err instanceof Token)
      throw new UnauthorizedException('invaid token');

    }
  }
}