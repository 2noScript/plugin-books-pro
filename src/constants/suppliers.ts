import { IBookInfo, Suppliers } from "../models/types"

export const bookSuppliers: Record<Suppliers, IBookInfo> = {
    [Suppliers.TruyenQQ]: {
        key: Suppliers.TruyenQQ,
        name: "truyenqq",
        language: ["vi"],
        locale: "vi_VN",
        avatar: "",
        bookType: "Comic",
        domain: "truyenqqto.com",
    },
    [Suppliers.Metruyencv]: {
        key: Suppliers.Metruyencv,
        name: "metruyencv",
        language: ["vi"],
        locale: "vi_VN",
        avatar: "",
        bookType: "Novel",
        domain: "metruyencv.com",
    },
    [Suppliers.Mangadex]: {
        key: Suppliers.Mangadex,
        name: "mangadex",
        language: ["en"],
        locale: "en_EN",
        avatar: "",
        bookType: "Comic",
        domain: "mangadex.org",
    },
}
