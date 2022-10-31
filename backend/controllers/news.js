import News from "../models/news";

export const list = async (request, response) => {
    try{
        const news = await News.find().exec()
        response.json(news)
        }catch(error){
        response.status(400).json({message:"lỗi k hiển thị bài viết"})
        }
}
export const read = async (request, response) => {
    try {
        const news = await News.findOne({_id:request.params.id}).exec()
        
        response.json(news)
    } catch (error) {
        response.status(400).json({message:"Lỗi data"})
    }
}
export const create = async (request, response) => {
    console.log(request.body);
    try {
        const news = await News(request.body).save()
        response.json(news)
    } catch (error) {
        response.status(400).json({message:"k thể thêm bài viết"})
    }
}
export const remove = (request, response)=> {
    try {
        const news = News.findOneAndDelete({_id:request.params.id}).exec()
        response.json(news)
    } catch (error) {
        response.status(400).json({message:"k thể xóa bài viết"})
    }

}
export const update = async (request, response)=> {
    try {
        const news = await News.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json(news)
    } catch (error) {
        response.status(400).json({message:"k thể update bài viết"})
    }
}