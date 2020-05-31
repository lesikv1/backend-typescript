export interface User {
    id?: string;
    name: string;
    gender?: string;
    email: string;
    picture?: string;
    password: string;
    removed: boolean;
}