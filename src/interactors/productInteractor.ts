import { IProductInteractor } from "../interfaces/IProductInteractor";

export class ProductInteractor implements IProductInteractor {
  createProduct(input: any) {
    throw new Error("Method not implemented.");
  }
  updateStock(id: number, stock: number) {
    throw new Error("Method not implemented.");
  }
  getProducts(limit: number, offset: number) {
    throw new Error("Method not implemented.");
  }
}
