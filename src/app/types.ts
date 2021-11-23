
export interface option {
    index: any | number,
    value: number,
    selected: boolean
}

interface languageTranslation {
    [key: string]: string
}

interface wagerSelectBackend {
    selected: number,
    options: number[]
}

export interface backend {
    currency: string,
    language: string,
    wagerSelect: wagerSelectBackend,
    translations: languageTranslation
}

export interface wagerSelect {
    index?: number,
    selected: number,
    options: option[]
}



export type translations = languageTranslation
