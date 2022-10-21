import instance from "./instance";


export const listSize: any = () => {
    const url = `/size`;
    return instance.get(url);
}

export const getSizeId: any = (id: any) => {
    const url = `/size/${id}`;
    return instance.get(url);
}

export const add: any = (product: any) => {
    const url = `/size`;
    return instance.post(url, product);
}

export const editSize: any = (product: any) => {
    const url = `/size/${product.id}`;
    return instance.put(url, product);
}

export const removeSize: any = (id: any) => {
    const url = `/size/${id}`;
    return instance.delete(url);
}   