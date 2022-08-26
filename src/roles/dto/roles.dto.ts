import { ApiProperty } from '@nestjs/swagger'


export class RoleDto {
    @ApiProperty({ example: 'ADMIN', description: 'User role' })
    readonly value: string
    @ApiProperty({ example: 'Admin', description: 'Descroption role' })
    readonly description: string
}