import { IBookInfo, Suppliers } from "../models/types"

const ASSETS_ICON = "https://raw.githubusercontent.com/2noScript/plugin-books-pro/main/assets/icon/";

export const bookSuppliers: Record<Suppliers, IBookInfo> = {
    [Suppliers.TruyenQQ]: {
        key: Suppliers.TruyenQQ,
        name: "truyenqq",
        language: ["vi"],
        locale: "vi_VN",
        avatar: `${ASSETS_ICON}truyenqq.ico`,
        bookType: "Comic",
        domain: "truyenqqto.com",
    },
    [Suppliers.Metruyencv]: {
        key: Suppliers.Metruyencv,
        name: "metruyencv",
        language: ["vi"],
        locale: "vi_VN",
        avatar: `${ASSETS_ICON}metruyencv.ico`,
        bookType: "Novel",
        domain: "metruyencv.com",
    },
    [Suppliers.Mangadex]: {
        key: Suppliers.Mangadex,
        name: "mangadex",
        language: ["en"],
        locale: "en_EN",
        avatar: `${ASSETS_ICON}mangadex.ico`,
        bookType: "Comic",
        domain: "mangadex.org",
    },
    [Suppliers.Manhuavn]: {
        key: Suppliers.Manhuavn,
        name: "manhuavn",
        language: ["vi"],
        locale: "vi_VN",
        avatar: `${ASSETS_ICON}manhuavn.ico`,
        bookType: "Comic",
        domain: "manhuavn.top",
    },
}
