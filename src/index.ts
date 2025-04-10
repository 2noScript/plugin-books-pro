import { Suppliers } from "./models/types"
import * as PluginBooks from "./plugin"
import {bookSuppliers} from "./constants/suppliers"

export class Books {
    protected bookStore: Record<Suppliers, any>
    constructor() {
        this.bookStore = {
            [Suppliers.TruyenQQ]: PluginBooks.TruyenQQ,
            [Suppliers.Metruyencv]: PluginBooks.Metruyencv,
            [Suppliers.Mangadex]: PluginBooks.Mangadex,
        }
    }

    build(supplier: Suppliers) {
        return new this.bookStore[supplier](bookSuppliers[supplier].domain)
    }
}

export { Suppliers }
