import Size from "../models/size";

export const createSize = async (request, response) => {
    console.log(request.body);
    try {
        const size = await Size(request.body).save()
        response.json(size)
    } catch (error) {
        response.status(400).json({message:"k thể thêm size"})
    }
}
export const listSize = async (request, response) => {
    try{
        const size = await Size.find().exec()
        response.json(size)
        }catch(error){
        response.status(400).json({message:"lỗi k hiển thị size"})
        }
}

export const update = async (request, response)=> {
    try {
        const size = await Size.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json(size)
    } catch (error) {
        response.status(400).json({message:"k thể update size"})
    }
}

export const remove = (request, response)=> {
    try {
        const size = Size.findOneAndDelete({_id:request.params.id}).exec()
        response.json(size)
    } catch (error) {
        response.status(400).json({message:"k thể xóa size"})
    }

}