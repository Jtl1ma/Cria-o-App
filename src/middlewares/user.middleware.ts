import {Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    if(body.name === undefined || body.username === undefined || body.email === undefined || body.telefone === undefined || body.password === undefined || body.confirmpassword === undefined){
      return  res.status(StatusCodes.NOT_FOUND).json({message: 'The field "data" cannot be empty' });
    }

    if(body.name === '' || body.username === '' || body.email === '' || body.telefone === '' || body.password === '' || body.confirmpassword === ''){
      return  res.status(StatusCodes.NOT_FOUND).json({message: 'The field "data" is required' });
    }
    if(body.password !== body.confirmpassword){
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({message: 'Passwords do not match!'});
    }
  next();
};
export default {validateCreateUser}
/*
module.exports = {
    validateBory,
};*/