type TYPE_LANGUAGE = "en" | "vi"
type TYPE_lOCALE = "en_EN" | "vi_VN"
type Status = "SUCCESS" | "ERROR" | "WITHOUT"

export type DataType ="Top" | "New" | "Favorite"

export type BookType="Comic"|"Novel"
export enum Suppliers {
    Metruyencv = "Metruyencv",
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

export interface IBook {
    identifier: string
    name: string
    rank: number
    view?: number
    like?: number
    follow?: number,
    tags?: string,
    lastChapter?:number,
    author?:string,
    comment?:number,
    imageUrlThumbnail: string
    imagePathThumbnail?: string
    description?: string
}

export interface IResponseListBook {
    dataType: DataType
    data: IBook[]
    status: Status
}

export interface IBookInfo {
    key: Suppliers
    name: string
    language: TYPE_LANGUAGE[]
    locale: TYPE_lOCALE
    avatar: string
    bookType:BookType,
    domain:string
}
