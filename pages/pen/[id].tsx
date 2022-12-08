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
import { getItemById } from '../../database/dbItems';

interface Props {
    // info?: Item
    info: Item
}

const Item: NextPage<Props> = (props: Props) => {

    const {info} = props;

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
    const itemData = await getItemById(ctx.query.id);

    if (!itemData){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            info: itemData
        }
    }
}

export default Item