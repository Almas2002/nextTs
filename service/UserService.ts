import {$api} from "../api";

export class UserService {
    static async login(email:string,password:string){
        return await $api.post('auth/login',{email,password})
    }
    static async registration(email:string,password:string,phoneNumber,name?:string){
        return await $api.post('auth/registration',{email,password,phoneNumber,name})
    }
}