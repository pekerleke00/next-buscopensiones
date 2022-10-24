import type { NextPage } from 'next'
import { MainLayout } from '../components/layouts/MainLayout'

import styles from '../styles/Home.module.css'

const Item: NextPage = () => {

    return (
        <MainLayout>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    titulo
                </h1>
                
                <div>descripcion</div>
                <div>
                    info + mapa
                </div>
                <div>
                    galeria de imagenes
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

export default Item
