import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    gender: String,
    email: String,
    picture: String,
    password: String,
    removed: Boolean
})