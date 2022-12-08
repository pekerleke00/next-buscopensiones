import { isValidObjectId } from "mongoose"
import ItemModel from "../mongo-models/Item";
import { connect, disconnect } from './db';


export const getItemById = async (id: string | string[] | undefined) => {
    if (!isValidObjectId(id)) return null;

    await connect();
    const item = await ItemModel.findById(id).lean();
    await disconnect();

    return JSON.parse(JSON.stringify(item));
}

export const getItemByCity = async (city: string, page: number, filter: string | string[] | undefined) => {
    // if (!isValidObjectId(id)) return null; TODO check city
    await connect();

    const select = {};
    if (city) select.location = city
    if (filter) select.type = filter

    const items = await ItemModel.find(select)
        .skip((page - 1) * 6)
        .limit(6)
        .lean();
    await disconnect();

    return JSON.parse(JSON.stringify(items));
}

export const getAmountByCity = async (city: string, filter: string) => {
    // if (!isValidObjectId(id)) return null; TODO check city

    await connect();

    const select = {};
    if (city) select.location = city
    if (filter) select.type = filter

    const itemsAmount = await ItemModel.find(select).count();
    await disconnect();

    return itemsAmount || 0;
}