import type { NextPage } from 'next'
import { MainLayout } from '../../components/layouts/MainLayout';
import { GetServerSideProps } from 'next'
import { ItemTitle } from '../../components/ui/ItemTitle';
import { ItemInfo } from '../../components/ui/ItemInfo';
import { ItemGallery } from '../../components/ui/ItemGallery';
import { Item } from '../../models/Item';
import { NearByGrid } from '../../components/ui/NearByGrid';
import { getCityInfo } from '../../components/utils/citiesInfo';

import styles from '../../styles/pen.module.scss'

interface Props {
    info?: Item
}

const Item: NextPage<Props> = ({ info }) => {
    if (!info) {
        return <div>No se encontro</div>
    }

    return (
        <MainLayout title={`${info.name} | BuscoPensiones`}>
            <main className={styles.container}>
                <ItemTitle item={info} />

                <ItemGallery pictures={info?.pictures} />

                <ItemInfo item={info} location={getCityInfo(info.location)?.name!} />

                <NearByGrid lat={info.lat} lng={info.lng} location={getCityInfo(info.location)?.name!} name={info.name} />

                <div className={styles.adMockup}></div>
            </main>
        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const data = await fetch(`https://buscopensiones.com/labs/api/controller.php?type=getById&value=${ctx.query.id}&key=f381add79d6349e58f4aa18b7139ef54`)
        .then(response => response.json())

    return {
        props: {
            info: data.data.residences.length ? data.data.residences[0] : null
        }
    }
}

export default Item