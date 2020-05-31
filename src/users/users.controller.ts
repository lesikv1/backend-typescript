import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    HttpException,
    HttpService
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { User } from './interfaces/user.interface'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService, private httpService: HttpService) {}

    @Get('generate')
    async generate(): Promise<User>{
        const { data } = await this.httpService.get('https://randomuser.me/api/').toPromise();

        return this.usersService.generate(data.results[0])
            .catch(() => {
                throw new HttpException("does't work service of generate", 500)
            })
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll()
            .catch(() => {
                throw new HttpException("have not found users", 500)
            })
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<User> {
        return this.usersService.findOne(id)
            .catch((error) => {
                throw new HttpException(error, 400)
            })
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        const {
            name,
            email,
            picture,
            password,
            gender
        } = createUserDto

        if (!name || typeof name !== 'string') throw new HttpException("have not name or type is't string", 400)
        if (!email || typeof email !== 'string') throw new HttpException("have not email or type is't string", 400)
        if (!picture || typeof picture !== 'string') throw new HttpException("have not picture or type is't string", 400)
        if (!password || typeof password !== 'string') throw new HttpException("have not password or type is't string", 400)
        if (!gender || typeof gender !== 'string') throw new HttpException("have not gender or type is't string", 400)

        return this.usersService.create(createUserDto)
            .catch(error => {
                throw new HttpException(error, 400)
            })
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<User> {
        return this.usersService.delete(id)
    }

    @Put(':id')
    update(@Body() updateUserDto: CreateUserDto, @Param('id') id): Promise<User> {
        return this.usersService.update(id, updateUserDto)
    }

    @Post('login')
    login(@Body() userDto: CreateUserDto): Promise<User>{
        const {
            email,
            password,
        } = userDto

        if (!email || typeof email !== 'string') throw new HttpException("have not email or type is't string", 400)
        if (!password || typeof password !== 'string') throw new HttpException("have not password or type is't string", 400)

        return this.usersService.login(userDto)
            .catch(error => {
                throw new HttpException(error, 400)
            })
    }
}
