import { Router, Request, Response } from "express";
import ProductController from "../controllers/controller.products";
import tokenMiddleware from "../middlewares/auth.middleware";


const routeProduct = Router();

routeProduct.get('/',(req: Request, res: Response)=>{
    res.json('Welcome to the API!');
    console.log('Welcome to the API!');
});

routeProduct.get("/products", ProductController.getAll);
routeProduct.get("/products/:id", ProductController.getById);

routeProduct.post("/products", tokenMiddleware.authenticateToken, ProductController.create);
routeProduct.put("/products/:id", tokenMiddleware.authenticateToken, ProductController.update);
routeProduct.delete("/products/:id", tokenMiddleware.authenticateToken, ProductController.delete);

export default routeProduct;