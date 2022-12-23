import { FC } from 'react'
import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui/Navbar'

import styles from "./MainLayout.module.css"

interface Props {
    children: React.ReactNode;
    title?: string;
    translucidNavbar?: boolean;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const MainLayout: FC<Props> = (props: Props) => {

    const { children, title, translucidNavbar = false } = props;

    return (
        <div className={styles.container}>
            <Head>
                <title>{title || 'BuscoPensiones'}</title>
                <meta name="description" content="Catalogo de pensiones y residencias universitarias" />
                <link rel="icon" href="/favicon-bp.ico" />
                <meta property="og:title" content="BuscoPensiones" />
                <meta property="og:description" content="Guia de pensiones y residencias universitarias" />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
                <meta name="theme-color" content="#0198A1" />

                {/* meta keywords */}
                {/* meta author */}

                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3805134409321089"
                    crossOrigin="anonymous"
                ></script>

                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>

            <Navbar translucidNavbar={translucidNavbar} />

            <main className={`${!translucidNavbar && styles.mainContainer}`}>
                {children}
            </main>
        </div>
    )
}
