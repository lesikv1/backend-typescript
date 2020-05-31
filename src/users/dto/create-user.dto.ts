export class CreateUserDto {
    readonly name: string;
    readonly gender: string;
    readonly email: string;
    readonly picture: string;
    readonly password: string;
    removed: boolean;
}