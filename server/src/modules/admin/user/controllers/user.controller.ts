import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put, Query } from "@nestjs/common";
import { BaseApiSuccessResponse } from "src/common/dtos/base-api-response.dto";
import { Serialize } from "src/common/interceptor.ts/serialize.interceptor";
import { CreateUserDto } from "../dtos/create-user.dto";
import { FilterUserDto } from "../dtos/filter-user.dto";
import { ResetPasswordDto } from "../dtos/reset-password.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { UserDto } from "../dtos/user.dto";
import { UserService } from "../services/user.service";

// @Serialize(UserDto)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async getUsers(@Query() filterUserDto: FilterUserDto): Promise<BaseApiSuccessResponse<UserDto[]>> {
    const user = await this.userService.getUsers(filterUserDto);
    return {
      success: true,
      message: "List of all Users",
      statusCode: "200",
      data: user
    }
  }

  @Get(':id')
  async getUser(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<UserDto>> {
    const user = await this.userService.getUser(id);
    return {
      success: true,
      message: "List of a User",
      statusCode: "200",
      data: user
    }
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<BaseApiSuccessResponse<UserDto>> {
    const user = await this.userService.createUser(createUserDto);
    return {
      success: true,
      message: "List of created User",
      statusCode: "201",
      data: user
    }
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto): Promise<BaseApiSuccessResponse<UserDto>> {
    const user = await this.userService.updateUser(id, updateUserDto);
    return {
      success: true,
      message: "List of updated User",
      statusCode: "200",
      data: user
    }
  }

  @Patch('/reset-password/:id')
  async resetPassword(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() resetPasswordDto: ResetPasswordDto
  ): Promise<BaseApiSuccessResponse<UserDto>> {
    const user = await this.userService.resetPassword(id, resetPasswordDto);

    return {
      success: true,
      message: "Password reset successfully",
      statusCode: "200",
      data: user
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseUUIDPipe) id: string): Promise<BaseApiSuccessResponse<UserDto>> {
    const user = await this.userService.deleteUser(id);

    return {
      success: true,
      message: "List of deleted User",
      statusCode: "200",
      data: user
    }
  }
}