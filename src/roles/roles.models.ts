import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { User } from 'src/users/users.model';
import { UserRoles } from './user-roles.model';

interface RolesCreationATTRS {
    value: string,
    desciption: string
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RolesCreationATTRS>{
    @ApiProperty({ example: 1, description: 'userId' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Admin', description: 'The meaning of roles' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({ example: 'Admin', description: 'The description of role' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}