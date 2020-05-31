import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { HttpModule } from '@nestjs/common'
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserSchema } from './schemas/user.schema'

@Module({
    imports: [HttpModule, MongooseModule.forFeature([{name: 'User', schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
