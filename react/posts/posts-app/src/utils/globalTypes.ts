import Date from "../components/Post/Date/Date.tsx";

export const enum ThemeEnum {
    light ='light',
    dark = 'dark'
}

export const enum PostTypesEnum {
    small = "small",
    middle = "middle",
    large = "large"
}

export type UserType = {
    id: number,
    name: string,
    username:string,
}

export type PostType = {
    userId: number,
    id: number,
    title: string,
    body:string,
}

export type PostWithUserType = {
    userId: UserType,
    id: number,
    title: string,
    body:string,
    date: typeof Date,
}