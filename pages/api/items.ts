import type { NextApiRequest, NextApiResponse } from 'next'
import { connect, disconnect } from '../../database/db';
import ItemModel, { IItem } from '../../mongo-models/Item';

type Data =
    | { message: string }
    | IItem[]

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getItems(res);
        case 'POST':
            return addItem(res, req);
        default:
            return res.status(400).json({ message: '¯( ‘• ω • `) | Method not found' });
    }
}

const getItems = async (res: NextApiResponse) => {
    await connect();
    const items = await ItemModel.find().sort({ createdAt: 'asc' });
    res.status(200).json(items);
    await disconnect();
}

const addItem = async (res: NextApiResponse, req: NextApiRequest) => {
    await connect();
    await ItemModel.insertMany([req.body])
    res.status(200).json({message: 'success'});
    await disconnect();
}