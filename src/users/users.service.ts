import * as bcrypt from 'bcrypt'
import { Injectable } from '@nestjs/common';
import { User, GenerateUser} from './interfaces/user.interface'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel) {}

    async findAll(): Promise<User[]> {
        return this.userModel.find({removed: false})
    }

    async findOne(id: string): Promise<User> {
        const user = await this.userModel.findOne({ _id: id, removed: false })

        if(!user) throw 'User have not found or been removed'

        return user
    }

    async create(user: User): Promise<User> {
        user.removed = false

        const isOldUser = await this.userModel.findOne({ email: user.email })

        if(isOldUser) throw 'User was created with this email'

        user.password = await bcrypt.hash(user.password, 10)

        const newUser = new this.userModel(user);
        return newUser.save();
    }

    async delete(id: string): Promise<User> {
        return this.userModel.updateOne({ _id: id }, { $set: { removed: true } })
    }

    async update(id: string, user: User): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user, { new: true })
    }

    async login(data: User): Promise<User> {
        const user = await this.userModel.findOne({email: data.email})

        if (!user) throw 'User was not found or password is not correct'

        const isCorrectPassword = await bcrypt.compare(data.password, user.password)

        if (!isCorrectPassword) throw 'User was not found or password is not correct'

        return user
    }

    generate(data: GenerateUser) {
        const user = {
            name: data.name.title + ' ' + data.name.first + ' ' + data.name.last,
            email: data.email,
            gender: data.gender,
            picture: data.picture.large,
            password: data.login.password,
            removed: false
        }

        return this.create(user)
    }
}
