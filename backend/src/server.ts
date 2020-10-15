import express from 'express';
import path from 'path';
import 'express-async-errors';
import './database/connection';
import cors from 'cors';
import errorHandler from './errors/handler';
import routes from './routes.ts';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', '..','uploads')))
app.use(errorHandler);
//Rota = conjunto
//Recurso = usario


//query parms ?search=true
//route params /users/{id}

/*
    console.log(request.query);

    console.log(request.params);

    console.log(request.body);*/



 
app.listen(3333);   