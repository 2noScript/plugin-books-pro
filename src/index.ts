import { Suppliers } from "./models/types"
import { TruyenQQ } from "./plugin"

export class Books {
    protected bookStore: { [key in Suppliers]: any }
    constructor() {
        this.bookStore = {
            [Suppliers.TruyenQQ]: TruyenQQ,
            [Suppliers.NetTuyen]: undefined,
        }
    }

    build(supplier: Suppliers, domain: string) {
        return new this.bookStore[supplier](domain)
    }
}

export { Suppliers } from "./models/types"
