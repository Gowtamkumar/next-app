import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { UserService } from "../../user/services/user.service";
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserDto } from "../../user/dtos/user.dto";

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {

  constructor(
    private readonly userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'myJwtSecretFromConfig',
      ignoreExpiration: false,
    })
  }

  async validate(payload: any): Promise<UserDto> {
    const { sub: userId } = payload;
    const user = await this.userService.getUserById(userId);
    if (!user) {
      throw new UnauthorizedException('Token not valid');
    }
    return user;
  }
}