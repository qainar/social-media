import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { User } from './users.model';
import { CreateUserDto } from './dto/user-model.dto';
import { RolesService } from 'src/roles/roles.service';


@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepo: typeof User, private roleService: RolesService) {

    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepo.create(dto)
        const role = await this.roleService.getRoleByValue("ADMIN")
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user
    }

    async getAllUsers() {
        const user = await this.userRepo.findAll({ include: { all: true } })
        return user
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepo.findOne({ where: { email }, include: { all: true } })
        return user
    }

}
