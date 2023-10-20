import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../entity/entities.products";
import { StatusCodes } from "http-status-codes";


class ProductController {
  static getAll = async (req: Request, res: Response) => {
    const productRepository = getRepository(Product);
    const products = await productRepository.find();
    res.send(products);
  };

  static getById = async (req: Request, res: Response) => {
    const id = req.params;
    const productRepository = getRepository(Product);
    try {
      const product = await productRepository.findOneOrFail(id);
      res.send(product);
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send("Produto não encontrado");
    }
  };

  static create = async (req: Request, res: Response) => {
    const { name, description, price } = req.body;
    const productRepository = getRepository(Product);
    const product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
    await productRepository.save(product);
    res.status(StatusCodes.CREATED).send("Produto criado");
  };

  static update = async (req: Request, res: Response) => {
    const id = req.params;
    const { name, description, price } = req.body;
    const productRepository = getRepository(Product);
    try {
      const product = await productRepository.findOneOrFail(id);
      product.name = name;
      product.description = description;
      product.price = price;
      await productRepository.save(product);
      res.send(product);
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send("Produto não encontrado");
    }
  };

  static delete = async (req: Request, res: Response) => {
    const id = req.params;
    const productRepository = getRepository(Product);
    try {
      await productRepository.findOneOrFail(id);
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send("Produto não encontrado");
      return;
    }
    await productRepository.delete(id);
    res.send("Produto excluído com sucesso");
  };
}

export default ProductController;
