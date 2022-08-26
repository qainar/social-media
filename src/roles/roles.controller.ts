import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { Role } from './roles.models';
import { RoleDto } from './dto/roles.dto';


@ApiTags('roles')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) { }


    @ApiOperation({ summary: 'Creating roles' })
    @ApiResponse({ status: 200, type: Role })
    @Post()
    create(@Body() dto: RoleDto) {
        return this.roleService.createRole(dto)
    }

    @ApiOperation({ summary: 'Get Roles' })
    @ApiResponse({ status: 200, type: Role })
    @Get('/:value')
    getRoleByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }
}
