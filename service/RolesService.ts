import {$api} from "../api";
import {AxiosResponse} from "axios";
import {IRole} from "../types/types";

export class RolesService {
    static async create(value:string,description:string){
        await $api.post('role',{value,description})
    }
    static async getAll():Promise<AxiosResponse<IRole[]>>{
        return await $api.get<IRole[]>('role')
    }
    static async addRole(roleId:number,userId:number){
         await $api.post('user/add-role',{roleId,userId})
    }
    static async delete(id:number){
        await $api.delete(`role/${id}`)
    }
}