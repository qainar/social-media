import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { Role } from 'src/roles/roles.models';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationATTRS {
    email: string,
    name: string,
    password: string
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationATTRS>{
    @ApiProperty({ example: 1, description: 'userId' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'user@gmail.com', description: 'User email address' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: 'user', description: 'User name' })
    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @ApiProperty({ example: 'Password1234', description: 'User password' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: 87783114650, description: 'User phone number' })
    @Column({ type: DataType.INTEGER, unique: true })
    number: number;

    @ApiProperty({ example: 'true', description: 'User is banned or not' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: 'The user was insulting', description: 'Reason for banning' })
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}