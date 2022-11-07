export interface Item {
    id: number,
    name: string,
    description: string,
    contact: string,
    address?: string,
    distric: string,
    location: string,
    type: string,
    priceDescription: string,
    web: string,
    lat: number,
    lng: number,
    pictures: Picture[]
}

export interface Picture {
    mainPicture: boolean,
    path: string
}