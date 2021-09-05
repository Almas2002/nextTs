export interface IUser {
    id:number
    name?:string
    email:string
    phoneNumber:string
    roles?:IRole[]
}
export interface IRole {
    id:number
    value:string
    description:string
}
export interface IProductOne {
    id:number
    title:string
    description:string
    price:number
    avatar:string
    createdAt:string
    tags:ITag[]
    userId:IUser
    categoryId:ICategory
}
export interface IProduct {
    id:number
    title:string
    description:string
    avatar:string
    categoryId:ICategory
}
export interface ICategory {
    id:number
    name:string
}
export interface ITag {
    id:number
    name:string
}
export interface IComment {
    id:number
    title:string
    description:string
    name:string
}