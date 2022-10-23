import type { NextPage } from 'next'
import { MainLayout } from '../components/layouts/MainLayout'

import styles from '../styles/Home.module.css'

const Item: NextPage = () => {

    return (
        <MainLayout>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Item
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.tsx</code>
                </p>
            </main>
        </MainLayout>
    )
}

export default Item
