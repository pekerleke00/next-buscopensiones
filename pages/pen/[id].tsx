import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/layouts/MainLayout';
import { ItemCard } from '../../components/ui/ItemCard';
import { GetServerSideProps } from 'next'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import styles from '../../styles/Home.module.css'
import { useState } from 'react';
import Image from 'next/image';
import { ItemTitle } from '../../components/ui/ItemTitle';
import { ItemInfo } from '../../components/ui/ItemInfo';
import { ItemGallery } from '../../components/ui/ItemGallery';

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

    const [open, setOpen] = useState(false)

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

    return (
        <MainLayout title={`BuscoPensiones | item`}>
            <main className={styles.main} style={{ maxWidth: 1280, margin: 'auto', padding: 10 }}>
                <ItemTitle item={info} />

                <ItemInfo item={info} />

                <ItemGallery pictures={item?.pictures}/>

                {/* <div>
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={[
                            { src: "/image1.jpg" },
                            { src: "/image2.jpg" },
                            { src: "/image3.jpg" },
                        ]}
                        slides={item?.pictures.map(picture => { return { src: picture.path.replace('..', 'https://buscopensiones.com') } })}
                    />
                </div> */}
                
                
                {/* <div>
                    publicidad
                </div>
                <div>
                    compartir
                </div> */}
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