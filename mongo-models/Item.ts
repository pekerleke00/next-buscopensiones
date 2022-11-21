import mongoose, { Model, Schema } from "mongoose";
import { Item } from "../models/Item";

export interface IItem extends Item { }

const itemSchema = new Schema({
    available: { type: Boolean, required: true },
    isPromoted: { type: Boolean, required: true },
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, require: true },
    contact: { type: String, required: true },
    address: { type: String },
    distric: { type: String },
    location: { type: String, required: true },
    type: {
        type: String,
        required: true,
        enum: {
            values: ['masculina', 'femenina', 'mixta'],
            message: '{VALUE} | type invalid'
        }
    },
    price: {
        min: {
            type: Number
        },
        max: {
            type: Number
        }
    },
    priceDescription: { type: String },
    web: { type: String },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    pictures: [{
        path: { type: String, required: true },
        mainPicture: { type: String, required: true }
    }]
})

const ItemModel: Model<IItem> = mongoose.models.Item || mongoose.model('Item', itemSchema);

export default ItemModel;