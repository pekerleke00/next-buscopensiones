import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { MainLayout } from '../components/layouts/MainLayout';
import { CitiesGrid } from '../components/ui/CitiesGrid';
import { PreFooter } from '../components/ui/PreFooter';
import { getCitiesInfo } from '../components/utils/citiesInfo';
import City from '../models/City';
import Typewriter from "typewriter-effect";

import styles from '../styles/home.module.scss'

interface Props {
    cities: City[]
}

const Home: NextPage<Props> = ({ cities }) => {

    return (
        <MainLayout translucidNavbar={true}>
            <main>
                <div className={styles.mainBody}>
                    <div>
                        <h1>
                            <Typewriter
                                options={{
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("BuscoPensiones.com")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Guia de hospedajes universitarios")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Para estudiantes")
                                        .pauseFor(500)
                                        .typeString(" por estudiantes")
                                        .pauseFor(500)
                                        .start();
                                }}
                            />
                        </h1>
                        {/* <span>texto aspiracional</span> */}
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

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            cities: getCitiesInfo()
        }
    }
}

export default Home
