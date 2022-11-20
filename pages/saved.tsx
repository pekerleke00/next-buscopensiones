import { NextPage } from 'next'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { MainLayout } from '../components/layouts/MainLayout';
import { ItemCardList } from '../components/ui/ItemCardList';
import { Item } from '../models/Item';

const Saved: NextPage = () => {

    const [favorites, setFavorites] = useState<Item[]>()

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
    }, [])

    return (
        <MainLayout title={`Favoritos`}>
            <ItemCardList items={favorites || []}/>
        </MainLayout>
    )
}

export default Saved;
