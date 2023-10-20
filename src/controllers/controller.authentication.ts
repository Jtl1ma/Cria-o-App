import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/entities.users";
import bcrypt from 'bcryptjs';
import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
require('dotenv').config();


const JWT_SECRET = process.env.JWT_SECRET || 'your_default_jwt_secret';

export class AuthUser{

static loginUsers = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const usertRepositorys = getRepository(User);

    const validateUser = await usertRepositorys.findOne({where: {email}});
    /*query(`SELECT * FROM tab_users 
    WHERE email = $1`,[email]);*/
    if(!validateUser){
        res.status(StatusCodes.NOT_FOUND).json({ error: 'Invalid credentials' });
  }
  const isValidPass = await bcrypt.compare(password, validateUser.password);
  if(!isValidPass){
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ error: 'Invalid credentials' });
   }
    try {      
        const token = jwt.sign({ id: validateUser.id }, JWT_SECRET, {
            expiresIn: '1h' //30min 
        });
        const users = validateUser;
        delete users.password;
        
       return res.send({user: users, token });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to login' });
    }
  };


} 