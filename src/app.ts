import express from "express";
import { Request,Response } from "express";
import bodyParser from "body-parser";
import connection from "./db/config";
import { urlencoded, json } from "express";
import dotenv from 'dotenv'
import cors from 'cors'

import pacientesRoutes from './routes/pacientes-routes'
import especialidadesRoutes from './routes/especialidades-routes'
import doctoresRoutes from './routes/doctores-routes'
import telefonosRoutes from './routes/telefonos-routes'
import citasRoutes from './routes/citas-routes'

dotenv.config()
const app = express()

app.use(json());
app.use(cors());
app.use(urlencoded());

//Endpoint Inicial
app.get('/', (req:Request, res:Response)=>{
    res.send('Api Iniciada')
})

app.use('/api/pacientes', pacientesRoutes)
app.use('/api/especialidades', especialidadesRoutes)
app.use('/api/doctores', doctoresRoutes)
app.use('/api/telefonos', telefonosRoutes)
app.use('/api/citas', citasRoutes)

//Error Rutas
app.use((req:Request, res:Response)=>{
    res.status(404).send('Error 404. Lo Sentimos, Página no Encontrada')
})

//Error Servidor
app.use((req: Request, res: Response)=>{
    res.status(500).send('500: Internal Server Error')
})

//Conexion con Sequelize 
connection.sync()
.then(()=>{
    console.log('Database connected')
})
.catch((err)=>{
    console.log('Error al conectar la base de datos')
});

//iniciar el Servidor
app.listen(process.env.port,()=>{
    console.log("Servidor iniciado")
})
