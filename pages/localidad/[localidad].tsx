import type { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/layouts/MainLayout';
import { Sidebar } from '../../components/ui/Sidebar';
import { ItemCardList } from '../../components/ui/ItemCardList';

import styles from '../../styles/localidad.module.scss';


interface Props {
    items: any[],
    positions: any[]
}

const Localidad: NextPage<Props> = ({ items, positions }) => {

    const router = useRouter();

    const MapWithNoSSR = dynamic(() => import("../../components/ui/map/Map"), {
        ssr: false
    });

    return (
        <MainLayout title={`BuscoPensiones`}>
            <main>
                {/* <LocationBanner location={getCityName(router.query.localidad) || ''} /> */}

                <div>
                    {/* TODO: ver comportamiento en mobile */}
                    {/* sidebar | listado + favoritos + filtros de busqueda +publicidad */}
                </div>

                <div className={styles.mapContainer}>
                    <MapWithNoSSR
                        lat={-34.921418363392355}
                        lng={-57.95422157423989}
                        markers={positions}
                    />
                </div>

                <div className={styles.container}>
                    <Sidebar location={'La Plata'} />
                    <ItemCardList items={items}/>
                </div>
            </main>
        </MainLayout>
    )
}


// useEffect(() => {
//     fetch(`https://buscopensiones.com/labs/api/controller.php?page=1&location=${getCityName(router.query.localidad)}&type=getByLocation&key=f381add79d6349e58f4aa18b7139ef54`)
//         .then(response => response.json())
//         .then(data => {
//             setItems(data.data?.arr)
//         })
// }, [router.query.localidad])

// useEffect(() => {
//     fetch(`https://buscopensiones.com/labs/api/controller.php?location=${getCityName(router.query.localidad)}&type=getPositions&key=f381add79d6349e58f4aa18b7139ef54`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
// }, [router.query.localidad])

export const getServerSideProps: GetServerSideProps = async (ctx) => {

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

    const items = await fetch(`https://buscopensiones.com/labs/api/controller.php?page=1&location=${getCityName(ctx.query.localidad)}&type=getByLocation&key=f381add79d6349e58f4aa18b7139ef54`)
        .then(response => response.json())

    const positions = await fetch(`https://buscopensiones.com/labs/api/controller.php?location=${getCityName(ctx.query.localidad)}&type=getPositions&key=f381add79d6349e58f4aa18b7139ef54`)
        .then(response => response.json())

    return {
        props: {
            items: items.data?.arr,
            positions: positions.data?.arr
        }
    }
}

export default Localidad