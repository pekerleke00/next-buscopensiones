export interface Position {
    name: string,
    location: string,
    lat: number,
    lng: number,
    image: string,
    id: number | string,
}

export interface Marker {
    lat: number,
    lng: number,
    id: number | string,
    icon?: string,
    name?: string
}