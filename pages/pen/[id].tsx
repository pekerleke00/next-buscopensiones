import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/layouts/MainLayout';
import { ItemCard } from '../../components/ui/ItemCard';
import { GetServerSideProps } from 'next'

import styles from '../../styles/Home.module.css'

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

    console.log(info)

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
    const item = info;

    const handleBack = () => {
        router.push(`/localidad/${getCityCode(item?.location)}`)
    }


    return (
        <MainLayout title={`BuscoPensiones | item`}>
            <main className={styles.main}>
                <span onClick={handleBack}>Volver a {item?.location}</span>
                <h1 className={styles.title}>
                    {item?.name}
                </h1>

                <div>{item?.description}</div>
                <div>
                    <div>
                        {item?.contact}
                        {item?.priceDescription}
                        {item?.address}
                        {item?.web}
                    </div>
                    <div>
                        mapa
                    </div>
                </div>
                <div>
                    {
                        item?.pictures.map(picture => (
                            <img style={{ width: 300 }} key={picture.path} src={`${picture.path.replace('..', 'https://buscopensiones.com')}`} alt="" />
                        ))
                    }
                </div>
                <div>
                    publicidad
                </div>
                <div>
                    compartir
                </div>
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