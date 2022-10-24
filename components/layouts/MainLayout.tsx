import { FC } from 'react'
import Head from 'next/head'
import React from 'react'
import { Navbar } from '../Navbar'

import styles from "./MainLayout.module.css"

interface Props {
    children: React.ReactNode;
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const MainLayout: FC<Props> = (props: Props) => {

    const { children, title } = props;

    return (
        <div className={styles.container}>
            <Head>
                <title>{title || 'BuscoPensiones'}</title>
                <meta name="description" content="Catalogo de pensiones y residencias universitarias" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="BuscoPensiones" />
                <meta property="og:description" content="Guia de pensiones y residencias universitarias" />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
                {/* meta keywords */}
                {/* meta author */}
            </Head>

            <Navbar />

            <main className={styles.mainContainer}>
                {children}
            </main>
        </div>
    )
}
