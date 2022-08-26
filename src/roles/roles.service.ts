import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'
import { RoleDto } from './dto/roles.dto';
import { Role } from './roles.models';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepo: typeof Role) { }

    async createRole(dto: RoleDto) {
        const role = await this.roleRepo.create(dto)
        return role
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepo.findOne({ where: { value } })
        return role
    }
}
