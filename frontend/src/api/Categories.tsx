import  instance  from "./instance";
import {ICategori} from "../models/Categories"

export const listCategory:any =() =>{
    return instance.get(`/categories`)
}

export const readCategory =(id:string|number) =>{
    return instance.get(`/categories/${id}`)
}

export const removeCategory =(id:string|number) =>{
    return instance.delete(`/categories/${id}`)
}

export const addCategory =(categori:ICategori) =>{
    return instance.post(`/categories`,categori)
}
export const updateCategory =(categori:ICategori) =>{
    return instance.put(`/categories/${categori.id}`,categori)
}
export const listCateDetailById:any = (id:number) => {
    const url = `/detailCate?categories=${id}`;
    return instance.get(url);
}
export const listAllDetail:any = () => {
    const url = `/detailCate`;
    return instance.get(url);
}
export const getCatebyId:any = (id:any) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}  