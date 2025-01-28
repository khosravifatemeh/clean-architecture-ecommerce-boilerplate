import { ProductController } from "../controllers/ProductController";
import express from "express";
import { ProductRepository } from "../repositories/ProductRepository";
import { ProductInteractor } from "../interactors/productInteractor";

const repository = new ProductRepository();
const interactor = new ProductInteractor(repository);
const controller = new ProductController(interactor);

const router = express.Router();

router.post("/products", controller.onCreateProduct);
router.get("/products", controller.onGetProduct);
router.patch("/products/:id", controller.onUpdateStock);

export default router;
