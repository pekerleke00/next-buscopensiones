import { Item } from '../../models/Item';
import { ItemCard } from './ItemCard';
import { Pagination } from './Pagination';

import styles from './styles/itemCardList.module.scss';

interface Props {
    items: Item[],
    totalAmount: number;
}

export const ItemCardList = (props: Props) => {

    const { items, totalAmount } = props;

    if (!items.length) {
        return (
            <div>
                No hay nada para mostrar
            </div>
        )
    }

    return (
        <>
            <div className={styles.container}>
                {
                    items?.map((item: Item) => (
                        <ItemCard item={item} key={item.name} />
                    ))
                }
            </div>
            <hr />
            <Pagination totalAmount={totalAmount} />
        </>
    )
}
