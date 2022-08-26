import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config'
import { User } from "./users/users.model";
import { Role } from "./roles/roles.models";
import { RolesModule } from "./roles/roles.module";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.PG_HOST,
            port: Number(process.env.PG_PORT),
            username: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DB,
            models: [User, Role, UserRoles],
            autoLoadModels: true
        }),
        UsersModule, RolesModule, AuthModule
    ]
})
export class AppModule {

}