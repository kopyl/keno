
export interface option {
    index: any | number,
    value: number,
    selected: boolean
}

interface wagerSelectBackend {
    selected: number,
    options: number[]
}

export interface backend {
    currency: string,
    language: string,
    wagerSelect: wagerSelectBackend
}

export interface wagerSelect {
    index?: number,
    selected: number,
    options: option[]
}


