import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
    @ApiProperty({ example: 'user@gmail.com', description: 'User email address' })
    readonly email: string
    @ApiProperty({ example: 8778246428, description: 'User phone number' })
    readonly number: number
    @ApiProperty({ example: 'FSAfSF92f4', description: 'User password' })
    readonly password: string
}