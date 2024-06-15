export const enum ThemeEnum {
    light ='light',
    dark = 'dark'
}

export const enum PostTypesEnum {
    small = "small",
    middle = "middle",
    large = "large"
}

export type GeoType = {
    lat: string,
    lng: string,
}

export type AddressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GeoType,
}

export type LoginType = {
    uuid: string,
    username: string,
    password: string,
    md5: string,
    sha1: string,
    registered: string,
}

export type CompanyType = {
    name: string,
    catchPhrase: string,
    bs: string,
}

export type UserType = {
    id: number,
    firstname: string,
    lastname:string,
    email:string,
    birthDate:string,
    login:LoginType,
    address:AddressType,
    phone:string,
    website:string,
    company:CompanyType,
}

export type PostType = {
    id: number,
    slug: string,
    url: string,
    title:string,
    content:string,
    image:string,
    thumbnail:string,
    status:string,
    category:string,
    publishedAt:string,
    updatedAt:string,
    userId:string,
}

export interface PostWithUserType extends PostType {
    // id: number,
    // slug: string,
    // url: string,
    // title:string,
    // content:string,
    // image:string,
    // thumbnail:string,
    // status:string,
    // category:string,
    // publishedAt:string,
    // updatedAt:string,
    // userId:string,
    user: UserType | undefined,
}