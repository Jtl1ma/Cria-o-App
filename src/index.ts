import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './serve';
require('dotenv').config();

const PORT = process.env.PORT || 3000;

createConnection()
.then(async ()=> {

app.listen(PORT, ()=>{
    console.log(`Server running or port ${PORT}`);
});

})
.catch((error)=>{
    console.log('Error while connecting to the database', error);
});