import type { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic';
import { MainLayout } from '../../components/layouts/MainLayout';
import { Sidebar } from '../../components/ui/Sidebar';
import { ItemCardList } from '../../components/ui/ItemCardList';
import { getCityInfo } from '../../components/utils/citiesInfo';
import { Item } from '../../models/Item';
import City from '../../models/City';
import { Position } from '../../models/Position';

import styles from '../../styles/localidad.module.scss';
import itemsApi from '../../apis/itemsApis';
import { useEffect } from 'react';


interface Props {
    items: Item[],
    positions: Position[],
    cityInfo: City,
    itemsAmount: number
}

const Localidad: NextPage<Props> = ({ items, positions, cityInfo, itemsAmount }) => {

    const MapWithNoSSR = dynamic(() => import("../../components/ui/map/Map"), {
        ssr: false
    });

    const refreshItems = async() => {
        const { data } = await itemsApi.get('/items'); //TODO: consumir SSR
        console.log(data);
    }

    useEffect(() => {
        refreshItems()
    }, [])
    

    return (
        <MainLayout title={`BuscoPensiones`}>
            <main style={{ paddingBottom: 40 }}>
                {/* <LocationBanner location={getCityName(router.query.localidad) || ''} /> */}

                <div>
                    {/* TODO: ver comportamiento en mobile */}
                    {/* sidebar | listado + favoritos + filtros de busqueda +publicidad */}
                </div>

                <div className={styles.mapContainer}>
                    <MapWithNoSSR
                        lat={cityInfo.lat}
                        lng={cityInfo.lng}
                        markers={positions}
                        zoom={14}
                    />
                </div>

                <div className={styles.container}>
                    <Sidebar location={cityInfo?.label || ''} itemsQuantity={itemsAmount} />
                    <ItemCardList items={items} totalAmount={itemsAmount} />
                </div>
            </main>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cityInfo = getCityInfo(ctx.query.localidad as string)
    const page = ctx.query.page || 1

    const items = await fetch(`https://buscopensiones.com/labs/api/controller.php?page=1&location=${cityInfo?.label || ''}&type=getByLocation&key=f381add79d6349e58f4aa18b7139ef54&page=${page}`)
        .then(response => response.json())

    const positions = await fetch(`https://buscopensiones.com/labs/api/controller.php?location=${cityInfo?.label || ''}&type=getPositions&key=f381add79d6349e58f4aa18b7139ef54`)
        .then(response => response.json())

    return {
        props: {
            items: items.data?.arr,
            positions: positions.data?.arr,
            itemsAmount: items.data?.decodedPensiones,
            cityInfo
        }
    }
}

export default Localidad