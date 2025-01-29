import { ProductController } from "../controllers/ProductController";
import express from "express";
import { ProductRepository } from "../repositories/ProductRepository";
import { ProductInteractor } from "../interactors/productInteractor";
import { Mailer } from "../external-libraries/mailer";
import { MessageBroker } from "../external-libraries/messageBroker";
import { Container } from "inversify";
import { IProductRepository } from "../interfaces/IProductRepository";
import { INTERFACE_TYPE } from "../utils/appConst";
import { IProductInteractor } from "../interfaces/IProductInteractor";
import { IMailer } from "../interfaces/IMailer";
import { IMessageBroker } from "../interfaces/IMessageBroker";

const container = new Container();
container
  .bind<IProductRepository>(INTERFACE_TYPE.ProductRepository)
  .to(ProductRepository);

container
  .bind<IProductInteractor>(INTERFACE_TYPE.ProductRepository)
  .to(ProductInteractor);

container.bind<IMailer>(INTERFACE_TYPE.Mailer).to(Mailer);
container.bind<IMessageBroker>(INTERFACE_TYPE.Mailer).to(MessageBroker);
container.bind(INTERFACE_TYPE.ProductController).to(ProductController);

const router = express.Router();
const controller = container.get<ProductController>(
  INTERFACE_TYPE.ProductController
);
router.post("/products", controller.onCreateProduct.bind(controller));
router.get("/products", controller.onGetProduct.bind(controller));
router.patch("/products/:id", controller.onUpdateStock.bind(controller));

export default router;
