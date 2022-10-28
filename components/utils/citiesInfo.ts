export const getCitiesInfo = () => {
    return [
        {
            name: 'la_plata',
            description: '',
            label: 'La Plata',
            image: '/la_plata.jpg',
            lat: -34.921418363392355,
            lng: -57.95422157423989,
        },
        {
            name: 'buenos_aires',
            description: '',
            label: 'Buenos Aires Capital',
            image: '/buenos_aires_capital.jpg',
            lat: -34.60406173123497,
            lng: -58.39714211590104,
        },
        {
            name: 'rosario',
            description: '',
            label: 'Rosario',
            image: '/rosario.jpg',
            lat: -32.95575660705694,
            lng: -60.667735346350796,
        },
        {
            name: 'cordoba',
            description: '',
            label: 'Cordoba',
            image: '/cordoba.jpg',
            lat: -31.419117092409138,
            lng: -64.18795820189291,
        },
        {
            name: 'mendoza',
            description: '',
            label: 'Mendoza',
            image: '/mendoza.jpg',
            lat: -32.888016610896415,
            lng: -68.8592687121093,
        },
    ]
}

export const getCityInfo = (cityName: string) => {
    return getCitiesInfo().find(city => city.name === cityName || city.label === cityName)
}