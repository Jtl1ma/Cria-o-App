import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/entities.users";
import bcrypt from 'bcryptjs';
import { StatusCodes } from "http-status-codes";

class ControllerUsers {
  static getAll = async (req: Request, res: Response) => {
    const usertRepository = getRepository(User);
    const getUsers = await usertRepository.find();
   // delete getUsers.password;
    res.send(getUsers);
  };

  static getById = async (req: Request, res: Response) => {
    const id = req.params;
    const usertRepository = getRepository(User);
    try {
      const users = await usertRepository.findBy(id);
   // delete users.password; 
      res.send(users);
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send("Usuario não encontrado");
    }
  };

  static create = async (req: Request, res: Response) => {
    const { name, username, email, telefone, password } = req.body;
    try {      
      const hashPassword = await bcrypt.hash(password, 10);
      const userRepositorys = getRepository(User);

     const validateUser = await userRepositorys.findOne({where: {email}});
    
     if(validateUser){
      res.status(StatusCodes.CONFLICT).json({error: 'Failes to register users!!'});
    } 
    const user = new User();
        user.name = name;
        user.username = username;
        user.email = email;
        user.telefone = telefone;
        user.password = hashPassword;
    await userRepositorys.save(user);
    res.status(StatusCodes.CREATED).send("Created User out successfully");
    
    } catch (error) {
      res.status(StatusCodes.CONFLICT).json({error: 'Failes to register user!'});
    }
  };

  static update = async (req: Request, res: Response) => {
    const id = req.params;
    const { name, username, email, telefone, password } = req.body;
    const usertRepository = getRepository(User);
    try {
             
      const user = await usertRepository.findOneByOrFail(id);
     // const user = await usertRepository.findOne(id);
      const hashPassword = await bcrypt.hash(password, 10);
        user.name = name;
        user.username = username;
        user.email = email;
        user.telefone = telefone;
        user.password = hashPassword;
      await usertRepository.save(user);
      delete user.password;
      res.send(user);
    } catch {
      res.status(StatusCodes.CONFLICT).send("Failes to update the User!!!");
    }
  };

  static delete = async (req: Request, res: Response) => {
    const id = req.params;
    const userRepository = getRepository(User);
   /*try {
      await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send("User not found!");
      return;
    }*/
    await userRepository.delete(id);
    res.send("User delete out successfully!");
  };
}

export default ControllerUsers;
