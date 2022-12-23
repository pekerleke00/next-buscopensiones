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

export const getItemByCity = async (city: string, page: string | string[], filter: string | string[] | undefined) => {
    // if (!isValidObjectId(id)) return null; TODO check city
    await connect();

    const select: any = {};
    if (city) select.location = city
    if (filter) select.type = filter

    const items = await ItemModel.find(select)
        .skip((Array.isArray(page) ? parseInt(page[0]) : parseInt(page) - 1) * 9)
        .limit(9)
        .lean();
    await disconnect();

    return JSON.parse(JSON.stringify(items));
}

export const getAmountByCity = async (city: string, filter: string | string[] | undefined) => {
    // if (!isValidObjectId(id)) return null; TODO check city

    await connect();

    const select: any = {};
    if (city) select.location = city
    if (filter) select.type = filter

    const itemsAmount = await ItemModel.find(select).count();
    await disconnect();

    return itemsAmount || 0;
}