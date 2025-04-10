import { Page, usePageFetch } from "t2-browser-worker"
import { BaseBook } from "../models/base"
import { IResponseListBook, DataType } from "../models/types"

export default class Mangadex extends BaseBook {
    private readonly API_ENDPOINTS = {
        TOP: `https://api.${this.domain}/manga?limit=${this.LIMIT_ITEMS}&offset=0&includes[]=cover_art&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&order[followedCount]=desc&includedTagsMode=AND&excludedTagsMode=OR`,
        FAVORITE: `https://api.${this.domain}/manga?limit=${this.LIMIT_ITEMS}&offset=0&includes[]=cover_art&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&order[rating]=desc&includedTagsMode=AND&excludedTagsMode=OR`,
        NEW: `https://api.${this.domain}/manga?limit=${this.LIMIT_ITEMS}&offset=0&includes[]=cover_art&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&order[createdAt]=desc&includedTagsMode=AND&excludedTagsMode=OR`,
        DETAIL: `https://api.${this.domain}/statistics/manga`,
    }

    private transformBookData(book: any, stat: any, index: number) {
        const title =
            book.attributes.title.en || Object.values(book.attributes.title)[0]
        const imageName= book.relationships.find(
            (item: any) => item.type === "cover_art"
        )?.attributes.fileName
        return {
            rank: index + 1,
            identifier: this.getIdentifier(title),
            name: title,
            link: `/title/${book.id}/${book.attributes.links.ap}`,
            imageUrlThumbnail:`${this.baseUrl}/covers/${book.id}/${imageName}.256.jpg`,
            follow: stat.follows,
            comment: stat.comments?.repliesCount ?? 0,
            rating: stat.rating?.average ? (stat.rating.average / 10) * 5 : 0,
            tags: book.attributes.tags
                .map((tag: any) => tag.attributes.name.en)
                .filter(Boolean)
                .join(","),
            description:
                book.attributes.description?.en ||
                Object.values(book.attributes.description || {})[0] ||
                "",
            lastChapter: book.attributes.lastChapter,
        }
    }

    async getInfoABook(
        page: Page,
        url: string,
        dataType: DataType
    ): Promise<IResponseListBook> {
        try {
            const result: IResponseListBook = {
                dataType,
                data: [],
                status: "SUCCESS",
            }

            const { data } = await usePageFetch(page, url)
            if (!data?.length) {
                return this.ErrorIResponseListBook(dataType)
            }

            const mangaIds = data.map((item: { id: string }) => item.id)
            const statsUrl = `${this.API_ENDPOINTS.DETAIL}?${mangaIds
                .map((id: string) => `manga[]=${id}`)
                .join("&")}`

            const { statistics } = await usePageFetch(page, statsUrl)

            result.data = data.map((book: any, index: number) =>
                this.transformBookData(book, statistics[book.id], index)
            )

            return result
        } catch (error) {
            console.error(`Error fetching ${dataType} books:`, error)
            return this.ErrorIResponseListBook(dataType)
        }
    }

    async getNew(page: Page): Promise<IResponseListBook> {
        return this.getInfoABook(page, this.API_ENDPOINTS.NEW, "New")
    }

    async getFavorite(page: Page): Promise<IResponseListBook> {
        return this.getInfoABook(page, this.API_ENDPOINTS.FAVORITE, "Favorite")
    }

    async getTop(page: Page): Promise<IResponseListBook> {
        return this.getInfoABook(page, this.API_ENDPOINTS.TOP, "Top")
    }
}
