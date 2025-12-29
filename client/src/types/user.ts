export interface User {
    id : string;
    displayName: string;
    email: string;
    token: string;
    imgUrl?: string;
}

export type RegisterCreds = {
    email: string;
    password: string;
}

export type LoginCreds = {
    displayName: string;
    email: string;
    password: string;
}