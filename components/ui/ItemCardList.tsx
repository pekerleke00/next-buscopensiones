import { ItemCard } from './ItemCard';

import styles from './styles/itemCardList.module.scss';

interface Props {
    items: any
}

export const ItemCardList = (props: Props) => {

    const { items } = props;

    return (
        <>
            <div className={styles.container}>
                {
                    items?.map((item: any) => (
                        <ItemCard item={item} key={item.name} />
                    ))
                }
            </div>
            <hr />
            paginado
        </>
    )
}
