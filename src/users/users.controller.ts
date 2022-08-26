import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/user-model.dto';
import { UsersService } from './users.service';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger'
import { User } from './users.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/role-auth.decorator';
import { RolesGuard } from 'src/auth/roles-guard';


@ApiTags("Users")
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }


    @ApiOperation({ summary: 'Creating users' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }


    @ApiOperation({ summary: 'Get All Users' })
    @ApiResponse({ status: 200, type: [User] })
    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers()
    }

}
