import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { MainLayout } from '../components/layouts/MainLayout';
import { CitiesGrid } from '../components/ui/CitiesGrid';
import { PreFooter } from '../components/ui/PreFooter';
import { getCitiesInfo } from '../components/utils/citiesInfo';

import styles from '../styles/home.module.scss'

interface Props {
    cities: any[]
}

const Home: NextPage<Props> = ({ cities }) => {
    return (
        <MainLayout>
            <main>
                <div className={styles.mainBody}>
                    <div>
                        <h1>BuscoPensiones [logo]</h1>
                        <span>texto aspiracional</span>
                    </div>
                </div>
                <div className={styles.subBody}>
                    <CitiesGrid cities={cities} />
                    <PreFooter />
                </div>
            </main>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: {
            cities: getCitiesInfo()
        }
    }
}

export default Home
