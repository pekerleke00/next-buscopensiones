import { useRouter } from 'next/router';

import styles from './styles/itemTitle.module.scss';

interface Props {
    item: any
}

export const ItemTitle = (props: Props) => {

    const { item } = props

    const router = useRouter();

    const getCityCode = (city: string | string[] | undefined) => {
        if (city === 'La Plata') {
            return 'la_plata'
        } else if (city === 'Buenos Aires Capital') {
            return 'buenos_aires'
        } else if (city === 'Rosario') {
            return 'rosario'
        } else if (city === 'Cordoba') {
            return 'cordoba'
        } else if (city === 'Mendoza') {
            return 'mendoza'
        }
    }

    const handleBack = () => {
        router.push(`/localidad/${getCityCode(item?.location)}`)
    }

    return (
        <div className={styles.container}>
            <span className={styles.goBackButton} onClick={handleBack}>{'<'} Volver a {item?.location}</span>
            <h1>
                {item?.name}
            </h1>

            <div className={styles.description}>
                {item.description}
            </div>
        </div>
    )
}
