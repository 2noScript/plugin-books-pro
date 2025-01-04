type TYPE_LANGUAGE = "en" | "vi"
type TYPE_lOCALE = "en_EN" | "vi_VN"
type DataType = "TopDay" | "TopWeek" | "TopMonth" | "New" | "favorite"
type Status = "SUCCESS" | "ERROR"|"WITCH_OUT"

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
    _bookId: string
    imageThumbnail: string
    name: string
    path: string
    views?: number
}

export interface IResponseListComic {
    dataType: DataType
    data: IComic[]
    status: Status
}


export interface  IComicInfo{
   key:Suppliers,
   name:string
   language:TYPE_LANGUAGE[],
   locale:TYPE_lOCALE,
   avatar:string
}