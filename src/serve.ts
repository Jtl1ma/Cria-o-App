import 'reflect-metadata';
import express, { Application } from 'express';
import routeProduct from './routers/route.products';
import routeUsers from './routers/route.users';

const cors = require("cors");
const app: Application = express();

app.use(cors());
app.use(express.json());
//app.use('/api', route);
app.use(express.urlencoded({ extended: true }));

app.use(routeUsers);
app.use(routeProduct);

export default app;