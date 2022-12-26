import React from 'react'
import { MainLayout } from '../components/layouts/MainLayout'
import { IoMdArrowBack } from 'react-icons/io';

import styles from '../styles/custom404.module.scss'
import Link from 'next/link';

export default () => {
    return (
        <MainLayout>
            <div className={styles.container}>
                <div>
                    <h1>Ups!</h1>
                    <p>No se encontro lo que estabas buscando</p>
                    <Link href={'/'}>
                        <button> <IoMdArrowBack style={{ fontWeight: 'bold' }} /> Volver al incio</button>
                    </Link>
                </div>
                <img src="/404-V2.svg" alt="" />
            </div>
        </MainLayout>
    )
}