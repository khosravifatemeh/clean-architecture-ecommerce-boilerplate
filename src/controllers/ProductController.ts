import { NextFunction, Response, Request } from "express";
import { IProductInteractor } from "../interfaces/IProductInteractor";

export class ProductController {
  private interactor: IProductInteractor;

  constructor(interactor: IProductInteractor) {
    this.interactor = interactor;
  }

  async onCreateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const data = await this.interactor.createProduct(body);
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  async onGetProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const offset = parseInt(`${req.query.offset}`) || 0;
      const limit = parseInt(`${req.query.limit}`) || 0;
      const data = await this.interactor.getProducts(limit, offset);
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async onUpdateStock(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const body = req.body;
      const data = await this.interactor.updateStock(id, body);
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
