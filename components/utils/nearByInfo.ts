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

var latArq = (-34.905152);
                var lonArq = (-57.943210);

                var latBellas = (-34.923465);
                var lonBellas = (-57.941851);

                var latAstro = (-34.908789);
                var lonAstro = (-57.933296);

                var latEco = (-34.912873);
                var lonEco = (-57.950574);

                var latExa = (-34.907087);
                var lonExa = (-57.944542);

                var latAbog = (-34.913415);
                var lonAbog = (-57.950597);

                var latMed = (-34.909494);
                var lonMed = (-57.928393);

                var latNat = (-34.908771);
                var lonNat = (-57.926375);

                var latVet = -34.911771;
                var lonVet = -57.930023;

                var latHuma = -34.900369;
                var lonHuma = -57.932167;

                var latInfo = -34.903588;
                var lonInfo = -57.937983;

                var latIng = -34.907644;
                var lonIng = -57.945021;

                var latOdont = -34.908664;
                var lonOdont = -57.943044;

                var latPerio = -34.912369;
                var lonPerio = -57.926882;

                var latPsico = -34.900369;
                var lonPsico = -57.932167;

                var latTraba = -34.925165;
                var lonTraba = -57.941029;

                var latUtn = -34.905247;
                var lonUtn = -57.925497;

                var latUca = -34.924614;
                var lonUca = -57.950721;

export const getNearByInfoByLocation = (location: string) => {
    return getNearByInfo().filter(nearByInfo => nearByInfo.location === location);
}