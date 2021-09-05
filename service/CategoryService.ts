import {$api} from "../api";
import {AxiosResponse} from "axios";
import {ICategory} from "../types/types";

export class CategoryService {
    static async create(name:string){
        await $api.post('category',{name})
    }
    static async getAll():Promise<AxiosResponse<ICategory[]>>{
        return await $api.get<ICategory[]>('category')
    }
}