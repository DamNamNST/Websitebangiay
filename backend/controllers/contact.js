import Contact from "../models/contact";

export const create = async (request, response) => {
    console.log(request.body);
    try {
        const contact = await new Contact(request.body).save()
        response.json(contact);
    } catch (error) {
        response.status(400).json({message:"Gửi liên hệ không thành công"})
    }
}

export const read = async (request, response) => {
    try {
        const contact = await Contact.findOne({_id:request.params.id}).exec()
        
        response.json(contact)
    } catch (error) {
        response.status(400).json({message:"không tìm thấy liên hệ"})
    }
}

export const list = async (request, response) => {
    try{
        const contact = await Contact.find().exec()
        response.json(contact)
        }catch(error){
        response.status(400).json({message:"không hiển thị list liên hệ"})
        }
}

export const update = async (req, res) => {
    const filter = { _id: req.params.id };
    const update = req.body;
    const options = { new: true };

    try {
        const contact = await Contact.findOneAndUpdate(filter, update, options).exec();
        res.json(contact);
    } catch (error) {
        res.status(400).json({
            message: "Cập nhật liên hệ thất bại",
            error
        });
    }
};

export const remove = async (req, res) => {
    const filter = { _id: req.params.id };

    try {
        const contact = Contact.findOneAndDelete({_id:request.params.id}).exec()
        response.json(contact)
    } catch (error) {
        response.status(400).json({message:"Xóa Liên hệ không thành công"})
    }
};