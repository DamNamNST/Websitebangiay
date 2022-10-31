import { CartType } from "../models/cart";
import instance from "./instance";


export const listOrder:any = () => {
    const url = `/orders`;
    return instance.get(url);
}
export const getOrderById:any = (id:number) => {
    const url = `/orders/${id}`;
    return instance.get(url);
}

export const addOrder:any = (order:CartType) => {
    const url = `/orders`;
    return instance.post(url, order);
}   

export const editOrder:any = (order:CartType) => {
    const url = `/orders/${order.id}`;
    return instance.patch(url, order);
}   

export const removeOrder:any = (id:number) => {
    const url = `/orders/${id}`;
    return instance.delete(url);
}   
