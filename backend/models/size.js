import { Schema, model } from "mongoose";

const sizeSchema = new Schema({
    name: {
        type: Number,
        unique: true,
        required: true,
        uppercase: true,
    }
}, { timestamps: true });

sizeSchema.index({'$**': 'text'});

export default model("Size", sizeSchema);