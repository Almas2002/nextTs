import {$api} from "../api";
import {AxiosResponse} from "axios";
import {IComment, IProduct, IProductOne} from "../types/types";

export class ProductService {
    static async create(title:string,description:string,categoryId:number,price:number,userId:number,photo:any){
          await $api.post('product',{title,description,categoryId,price,userId,photo})
    }
    static async getOne(id:number):Promise<AxiosResponse<IProductOne>>{
        return await $api.get<IProductOne>(`product/${id}`)
    }
    static async createComment(name:string,title:string,description:string){
        await $api.post('product/comment',{name,title,description})
    }
    static async getComments(id:number):Promise<AxiosResponse<IComment[]>>{
       return  await $api.get<IComment[]>(`product/comment/${id}`)
    }
    static async getProducts(categoryId?:number,limit?:number,page?:number):Promise<AxiosResponse<IProduct[]>>{
        if(categoryId || limit || page){
            return await $api.get<IProduct[]>(`product/`,{params:{categoryId,limit,page}})
        }
       return await $api.get<IProduct[]>(`product`)
    }
    static async delete(id:number){
        await $api.delete(`product/${id}`)
    }
    static async getUserOfProducts(id:number):Promise<AxiosResponse<IProduct[]>>{
        return $api.get<IProduct[]>(`product/user/${id}`)
    }

}