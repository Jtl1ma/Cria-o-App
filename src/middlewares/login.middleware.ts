import {Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    if(body.email === undefined || body.password === undefined){
      return  res.status(StatusCodes.NOT_FOUND).json({message: 'The field "datas" cannot be empty' });
    }

    if(body.email === '' || body.password === ''){
      return  res.status(StatusCodes.NOT_FOUND).json({message: 'The field "datas" is required' });
    }
    if(!body.email || !body.password){
      return  res.status(StatusCodes.NOT_FOUND).json({message: 'The field "datas" not information' });
    }
  next();
};
export default validateLogin;