import type { NextPage } from 'next'
import { MainLayout } from '../../components/layouts/MainLayout';
import { GetServerSideProps } from 'next'
import { ItemTitle } from '../../components/ui/ItemTitle';
import { ItemInfo } from '../../components/ui/ItemInfo';
import { ItemGallery } from '../../components/ui/ItemGallery';

import styles from '../../styles/pen.module.scss'

interface Item {
    name: string,
    description: string,
    contact: string,
    address: string,
    distric: string,
    location: string,
    type: string,
    priceDescription: string,
    web: string,
    lat: string,
    lng: string,
    pictures: Picture[]
}

interface Picture {
    mainPicture: boolean,
    path: string
}

interface Props {
    info: Item
}

const Item: NextPage<Props> = ({ info }) => {
    return (
        <MainLayout title={`${info.name} | BuscoPensiones`}>
            <main className={styles.container}>
                <ItemTitle item={info} />

                <ItemInfo item={info} />

                <ItemGallery pictures={info?.pictures}/>

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
            info: data.data.residences[0]
        }
    }
}

export default Item