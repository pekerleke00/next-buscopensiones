import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { MainLayout } from '../components/layouts/MainLayout';
import { CitiesGrid } from '../components/ui/CitiesGrid';
import { PreFooter } from '../components/ui/PreFooter';

import styles from '../styles/Home.module.css'

interface Props {
    cities: any[]
}

const Home: NextPage<Props> = ({cities}) => {
    return (
        <MainLayout>
            <main className={styles.main}>
                <CitiesGrid cities={cities} />

                <PreFooter />
            </main>
        </MainLayout>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    // const { data } = await  // your fetch function here
    
    // pegada para conseguir localidades

    return {
        props: {
            cities: [
                {
                    name: 'la_plata',
                    description: '',
                    label: 'La Plata',
                    image: '/la_plata.jpg'
                },
                {
                    name: 'buenos_aires',
                    description: '',
                    label: 'Buenos Aires',
                    image: '/buenos_aires_capital.jpg'
                },
                {
                    name: 'rosario',
                    description: '',
                    label: 'Rosario',
                    image: '/rosario.jpg'
                },
                {
                    name: 'cordoba',
                    description: '',
                    label: 'Cordoba',
                    image: '/cordoba.jpg'
                },
                {
                    name: 'mendoza',
                    description: '',
                    label: 'Mendoza',
                    image: '/mendoza.jpg'
                },
            ]
        }
    }
}

export default Home
