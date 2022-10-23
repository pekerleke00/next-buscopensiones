import Head from 'next/head'
import React from 'react'
import { Navbar } from '../Navbar'

import styles from "./MainLayout.module.css"

interface Props {
    children: any
}

export const MainLayout = (props: Props) => {

    const {children} = props;

    return (
        <div className={styles.container}>
            <Head>
                <title>BuscoPensiones</title>
                <meta name="description" content="Catalogo de pensiones y residencias universitarias" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            {children}
        </div>
    )
}
