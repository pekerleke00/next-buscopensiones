import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import { MainLayout } from '../../components/layouts/MainLayout';
import { ItemCard } from '../../components/ui/ItemCard';

import styles from '../../styles/Home.module.css'

const cities = {
    la_plata: 'La Plata',
    buenos_aires: 'Buenos Aires',
}

const Localidad: NextPage = () => {

    const router = useRouter();

    const MapWithNoSSR = dynamic(() => import("../../components/ui/map/Map"), {
        ssr: false
    });

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

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://buscopensiones.com/labs/api/controller.php?type=getAll')
            .then(response => response.json())
            .then(data => {
                setItems(data.data.arr.filter(
                    (item: any) => item.location === getCityName(router.query.localidad)).splice(0, 10));
            })
    }, [router.query.localidad])


    return (
        <MainLayout title={`BuscoPensiones`}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {getCityName(router.query.localidad)}
                </h1>

                <div style={{marginBottom: 20}}>
                    <MapWithNoSSR lat={-34.921418363392355} lng={-57.95422157423989} />
                </div>

                <div>
                    {/* TODO: ver comportamiento en mobile */}
                    {/* sidebar | listado + favoritos + filtros de busqueda +publicidad */}
                </div>

                <div>
                    {/* mapa */}
                </div>

                <div>
                    {/* resultados + paginado + publicidad */}
                    {
                        items.map((item: any) => (
                            <ItemCard item={item} key={item.name} />
                        ))
                    }
                </div>
            </main>
        </MainLayout>
    )
}

export default Localidad