import { Product } from "../entites/Product";

export interface IProductRepository {
  create(data: Product): Promise<Product>;
  update(id: number, stock: number): Promise<Product>;
  find(limit: number, offset: number): Promise<Product[]>;
}
