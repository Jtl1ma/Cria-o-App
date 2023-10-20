import { Router, Request, Response } from "express";
import ControllerUsers from "../controllers/controller.users";
import userMiddleware from "../middlewares/user.middleware";
import loginMiddleware from "../middlewares/login.middleware";
import logoutMiddleware from "../middlewares/auth.middleware";
import tokenMiddleware from "../middlewares/auth.middleware";
import { AuthUser } from "../controllers/controller.authentication";


const routeUsers = Router();

routeUsers.get('/',(req: Request, res: Response)=>{
    res.json('Welcome to the Route User!!!');
    console.log('Welcome to the Route User!');
});

routeUsers.get("/users", ControllerUsers.getAll);
routeUsers.get("/users/:id", tokenMiddleware.authenticateToken, ControllerUsers.getById);

routeUsers.post("/users", userMiddleware.validateCreateUser,ControllerUsers.create);
routeUsers.post("/login", loginMiddleware, AuthUser.loginUsers);
routeUsers.post("/logout", logoutMiddleware.logoutMiddleware);

routeUsers.put("/user/:id", tokenMiddleware.authenticateToken, userMiddleware.validateCreateUser, ControllerUsers.update);
routeUsers.delete("/user/:id", tokenMiddleware.authenticateToken, ControllerUsers.delete);

export default routeUsers;