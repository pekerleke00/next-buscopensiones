import type { NextApiRequest, NextApiResponse } from 'next'
import { connect, disconnect } from '../../../database/db';
import ItemModel, { IItem } from '../../../mongo-models/Item';

type Data =
    | { message: string }
    | IItem[]

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getItem(res, req);
        default:
            return res.status(400).json({ message: '¯( ‘• ω • `) | Method not found' });
    }
}

const getItem = async (res: NextApiResponse, req: NextApiRequest) => {
    try {

        await connect();
        const { id } = req.query;
        const item = await ItemModel.findById(id);
        if (!item) {
            await disconnect();
            return res.status(400).json('No se encontro ese id')
        }
        await disconnect();
        return res.status(200).json(item);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Algo salio mal')
    }
}