import { useRouter } from 'next/router';
import { ItemCard } from './ItemCard';

import styles from './styles/itemCardList.module.scss';

interface Props {
    items: any
}

export const ItemCardList = (props: Props) => {

    const { items } = props;

    const router = useRouter();

    const getCityName = (city: string | string[] | undefined) => {
        if (city === 'la_plata') {
            return 'La Plata'
        } else if (city === 'buenos_aires') {
            return 'Buenos Aires Capital'
        } else if (city === 'rosario') {
            return 'Rosario'
        } else if (city === 'cordoba') {
            return 'Cordoba'
        } else if (city === 'mendoza') {
            return 'Mendoza'
        }
    }

    return (
        <div className={styles.container}>

            {/* resultados + paginado + publicidad */}
            {
                items?.map((item: any) => (
                    <ItemCard item={item} key={item.name} location={getCityName(router.query.localidad) || ''} />
                ))
            }
            paginado
        </div>
    )
}
