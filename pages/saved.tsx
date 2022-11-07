import { NextPage } from 'next'
import React from 'react'
import { MainLayout } from '../components/layouts/MainLayout';
import { ItemCardList } from '../components/ui/ItemCardList';

const Saved: NextPage = () => {
    return (
        <MainLayout title={`Favoritos`}>
            <ItemCardList items={[]} />
        </MainLayout>
    )
}

export default Saved;
