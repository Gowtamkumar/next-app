import * as bcrypt from "bcrypt";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { UserRepository } from "../repositories/user.repository";
import { ResetPasswordDto } from "../dtos/reset-password.dto";
import { FilterUserDto } from "../dtos/filter-user.dto";
import { plainToClass } from "class-transformer";
import { UserDto } from "../dtos/user.dto";

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserRepository) private readonly userRepo: UserRepository) { }

  getUsers(filterUserDto: FilterUserDto) {
    return this.userRepo.find(filterUserDto);
  }

  async getUser(id: string) {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new NotFoundException(`User of id: ${id} not found`);
    }
    return user;

  };

  createUser(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    
    const hashedPassword = bcrypt.hashSync(createUserDto.password, 10);
    const user = this.userRepo.create({ ...createUserDto, password: hashedPassword });
    return this.userRepo.save(user);
  };

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.getUser(id);
    Object.assign(user, updateUserDto);
    return this.userRepo.save(user);
  };

  async deleteUser(id: string) {
    const user = await this.getUser(id);
    return this.userRepo.remove(user);
  };

  async getUserById(id: string) {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new NotFoundException(`User of id: ${id} not found`)
    }
    delete user.password;
    return user;
  };

  async getUserByUsername(username) {
    const user = await this.userRepo.findOne({ username });
    if (!user) {
      throw new NotFoundException(`Useranme not found`)
    }
    delete user.password;
    return user;
  };


  async validateCredentials(username: string, password: string) {
    const user = await this.userRepo.findOne({ username });
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      return isValid ? plainToClass(UserDto, user, { excludeExtraneousValues: true }) : null;
    }
  }


  async resetPassword(id: string, resetPasswordDto: ResetPasswordDto) {
    const { currentPassword, newPassword } = resetPasswordDto;

    const user = await this.userRepo.findOne(id);

    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isValidPassword) {
      throw new BadRequestException('Password Invalid');
    };

    user.password = bcrypt.hashSync(newPassword, 10);
    return this.userRepo.save(user)
  }
}