/*import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { DatabaseError } from "pg";
import forbiddenError from "../model/errors/forbiddenerror.model";


function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    
    if(error instanceof DatabaseError){
        res.sendStatus(StatusCodes.BAD_REQUEST);
    } else if(error instanceof forbiddenError){
        res.sendStatus(StatusCodes.FORBIDDEN);
    } else {
        
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

export default errorHandler;*/