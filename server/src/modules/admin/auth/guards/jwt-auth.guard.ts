import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthStrategy } from "../enum/auth-strategy.enum";

@Injectable()
export class JwtAuthGuard extends AuthGuard(AuthStrategy.JwtAuth) { }