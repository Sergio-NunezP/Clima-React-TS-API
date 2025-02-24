export type SearchType = {
    city: string
    country: string
}

export type Coutry = {
    code: string
    name: string
}

export type Weather = {
    name: string
    main: {
        tem: number
        tem_max: number
        tem_min: number
    }
}