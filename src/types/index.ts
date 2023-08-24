// types not fully spasfic 

export interface Category {
    id: number,
    name: string,
    description: string | null,
    children: any,
    slug: string | null
    disable_shipping: number | null
}
