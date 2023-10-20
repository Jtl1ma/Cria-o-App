import { User } from '../entity/entities.users';
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
//import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
import dotenv from 'dotenv';
dotenv.config();


const jwt_secret = process.env.JWT_SECRET || 'your_default_jwt_secret';

const authenticateToken = async(req: Request, res: Response, next: NextFunction):Promise<void> =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token) {
       res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized' });
    }
  
    await jwt.verify(token, jwt_secret, (err: any, user: User) => {
      if (err) {
        return res.status(StatusCodes.FORBIDDEN).json({ error: 'Forbidden' });
    }
    if(!user){
          return res.status(StatusCodes.FORBIDDEN).json({ error: 'Forbidden' });
      }
      req.user = user;
      next();
    });
  };


function logoutMiddleware (req: Request, res: Response, next: NextFunction) {
 res.end();   
}
export default { authenticateToken, logoutMiddleware };
