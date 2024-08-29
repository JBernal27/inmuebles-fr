export interface IProperty{
    id:number
    city:string
    region:string
    size: number
    rooms: number
    bathrooms: number
    price: string
    type: string
    description: string
    details: string[]
    images: string[]
    mapsLocation: string
}

export interface IPropertyCard{
    id:number
    city:string
    region:string
    size: number
    rooms: number
    bathrooms: number
    price: string
    type: string
}