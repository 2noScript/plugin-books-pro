type TYPE_LANGUAGE = "en" | "vi"
type TYPE_lOCALE = "en_EN" | "vi_VN"
export type DataType = "TopDay" | "TopWeek" | "TopMonth" | "New" | "favorite"
type Status = "SUCCESS" | "ERROR" | "WITCH_OUT"

export enum Suppliers {
    NetTuyen = "nettruyen",
    TruyenQQ = "truyenqq",
}

export interface ISourceInfo {
    key: Suppliers
    name: string
    logo: string
    icon: string
    language: TYPE_LANGUAGE[]
    locale: TYPE_lOCALE
    domain: string
}

export interface IComic {
    identifier: string
    imageUrlThumbnail: string
    imagePathThumbnail?: string
    rank: number
    name: string
    view?: number
    like?: number
    follow?: number,
    genres?: string,
    lastChapter?:number
}

export interface IResponseListBook {
    dataType: DataType
    data: IComic[]
    status: Status
}

export interface IComicInfo {
    key: Suppliers
    name: string
    language: TYPE_LANGUAGE[]
    locale: TYPE_lOCALE
    avatar: string
}
