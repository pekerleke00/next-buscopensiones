export const getNearByInfo = () => {
    return [
        {
            name: 'Arquitectura y Urbanismo',
            location: 'la_plata',
            lat: -34.905152,
            lng: -57.943210,
            image: ''
        },
        {
            name: 'Bellas artes',
            location: 'la_plata',
            lat: -34.923465,
            lng: -57.941851,
            image: ''
        },
        {
            name: 'Ciencias Astronomicas y geofisicas',
            location: 'la_plata',
            lat: -34.908789,
            lng: -57.933296,
            image: ''
        },
        {
            name: 'Ciencias Economicas',
            location: 'la_plata',
            lat: -34.907087,
            lng: -57.944542,
            image: ''
        },
        {
            name: 'Ciencias Exactas',
            location: 'la_plata',
            lat: -34.907087,
            lng: -57.944542,
            image: ''
        },
        {
            name: 'Abogacia',
            location: 'la_plata',
            lat: -34.913415,
            lng: -57.950597,
            image: ''
        },
        {
            name: 'Ciencias Medicas',
            location: 'la_plata',
            lat: -34.909494,
            lng: -57.928393,
            image: ''
        },
        {
            name: 'Ciencias Naturales',
            location: 'la_plata',
            lat: -34.908771,
            lng: -57.926375,
            image: ''
        },
        {
            name: 'Ciencias Veterinarias',
            location: 'la_plata',
            lat: -34.911771,
            lng: -57.930023,
            image: ''
        },
        {
            name: 'Humanidades y Ciencias de la Educacion',
            location: 'la_plata',
            lat: -34.900369,
            lng: -57.932167,
            image: ''
        },
        {
            name: 'Informatica',
            location: 'la_plata',
            lat: -34.903553592426384,
            lng: -57.93764144875611,
            image: ''
        },
        {
            name: 'Ingenieria',
            location: 'la_plata',
            lat: -34.907644,
            lng: -57.945021,
            image: ''
        },
        {
            name: 'Odontologia',
            location: 'la_plata',
            lat: -34.908664,
            lng: -57.943044,
            image: ''
        },
        {
            name: 'Periodismo y Comunicacion Social',
            location: 'la_plata',
            lat: -34.912369,
            lng: -57.926882,
            image: ''
        },
        {
            name: 'Psicologia',
            location: 'la_plata',
            lat: -34.900369,
            lng: -57.932167,
            image: ''
        },
        {
            name: 'Trabajo Social',
            location: 'la_plata',
            lat: -34.925165,
            lng: -57.941029,
            image: ''
        },
        {
            name: 'UTN',
            location: 'la_plata',
            lat: -34.905247,
            lng: -57.925497,
            image: ''
        },
        {
            name: 'Universidad Catolica de La Plata',
            location: 'la_plata',
            lat: -34.924614,
            lng: -57.950721,
            image: ''
        }
    ]
}

export const getNearByInfoByLocation = (location: string) => {
    return getNearByInfo().filter(nearByInfo => nearByInfo.location === location);
}