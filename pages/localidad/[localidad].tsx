import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/layouts/MainLayout';

import styles from '../../styles/Home.module.css'

const cities = {
    la_plata: 'La Plata',
    buenos_aires: 'Buenos Aires',
}

const Localidad: NextPage = () => {

    const router = useRouter();
    console.log(router.query)

    return (
        <MainLayout title={`BuscoPensiones`}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {router.query.localidad}
                </h1>

                <div>
                    {/* TODO: ver comportamiento en mobile */}
                    sidebar | listado + favoritos + filtros de busqueda +publicidad 
                </div>

                <div>
                    mapa
                </div>

                <div>
                    resultados + paginado + publicidad
                </div>
            </main>
        </MainLayout>
    )
}

export default Localidad