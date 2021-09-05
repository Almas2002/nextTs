import {$api} from "../api";

export class ReportService {
    static async create(name:string,title:string,description:string,phone:string){
            await $api.post('report',{name,title,description,phone})
    }
    static async get(){
        await $api.get('')
    }
}