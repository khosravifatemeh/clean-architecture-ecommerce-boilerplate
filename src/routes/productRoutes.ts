import { ProductController } from "../controllers/ProductController";
import express from "express";
import { ProductRepository } from "../repositories/ProductRepository";
import { ProductInteractor } from "../interactors/productInteractor";

const repository = new ProductRepository();
const interactor = new ProductInteractor(repository);
const controller = new ProductController(interactor);

const router = express.Router();

router.post("/products", controller.onCreateProduct.bind(controller));
router.get("/products", controller.onGetProduct.bind(controller));
router.patch("/products/:id", controller.onUpdateStock.bind(controller));

export default router;
