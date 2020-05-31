export interface User {
    id?: string;
    name: string;
    gender?: string;
    email: string;
    picture?: string;
    password: string;
    removed: boolean;
}

export interface GenerateUser {
    id: string,
    name: {
        title: string,
        first: string,
        last: string,
    },
    email: string,
    gender: string,
    picture: {
        large: string
    },
    login: {
        password: string
    },
    removed: boolean
}