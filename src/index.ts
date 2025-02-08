import { Suppliers } from "./models/types"
import { TruyenQQ, Metruyencv } from "./plugin"

export class Books {
    protected bookStore: Record<Suppliers, any>
    constructor() {
        this.bookStore = {
            [Suppliers.TruyenQQ]: TruyenQQ,
            [Suppliers.Metruyencv]: Metruyencv,
        }
    }

    build(supplier: Suppliers, domain: string) {
        return new this.bookStore[supplier](domain)
    }
}

export { Suppliers }
