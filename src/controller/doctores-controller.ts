import { Doctores } from "../models/doctores-model";
import { Request, RequestHandler } from "express";
import { Especialidades } from "../models/especialidades-model";
import { Citas } from "../models/citas-model";
import { Pacientes } from "../models/pacientes-model";

export const createDoctores:RequestHandler = async (req, res)=>{
    try {
        const doctor = await Doctores.create(req.body)
        res.status(200).json({
            message: 'Doctor Creado Exitosamente',
            data: doctor
    })
    } catch (error:any) {
        res.status(500).json({
            message: 'El Doctor NO fue Creado',
            error: error.message
        })
    }
}

export const getDoctores:RequestHandler = async(req, res)=>{
    try {
        const doctor = await Doctores.findAll({
            include: [{
                model:Especialidades,
                attributes:['nombre']
            }]
        })
        res.status(200).json({
            message: 'Operacion Exitosa al traer los Doctores',
            data: doctor
    }) 
}catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer los Doctores',
            error: err.message
        })
    }
}

export const getDoctoresCitas:RequestHandler = async(req, res)=>{
    try {
        const doctor = await Doctores.findAll({
            include: [{
                model:Especialidades,
                attributes:['nombre']
            },{
                model: Citas,
                attributes: ['fecha_hora'],
                include:[{
                    model: Pacientes,
                    attributes: ['nombre', 'apellido']
                }]    
            }]
        })
        res.status(200).json({
            message: 'Operacion Exitosa al traer los Doctores',
            data: doctor
    }) 
}catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer los Doctores',
            error: err.message
        })
    }
}

export const getDoctoresByIdCitas:RequestHandler = async(req, res)=>{
    try {
        const doctor = await Doctores.findByPk(req.params.id,{
            include:[{
                model: Especialidades,
                attributes:['nombre']
            },{
                model: Citas,
                attributes: ['fecha_hora'],
                include:[{
                    model: Pacientes,
                    attributes: ['nombre', 'apellido']
                }]
            }]
        })
        if (doctor) {
            res.status(200).json({
                message:'Operacion exitosa al traer el doctor por ID',
                data:doctor
            })
        }else{
            res.status(404).json({
                message:'Doctor no encontrado por ID'
            })      
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer el doctor por ID',
            error: err.message
        })
    }
}

export const getDoctoresById:RequestHandler = async(req, res)=>{
    try {
        const doctor = await Doctores.findByPk(req.params.id,{
            include: [{
                model:Especialidades,
                attributes:['nombre']
            }]
        })
        if (doctor) {
            res.status(200).json({
                message:'Operacion Exitosa al traer el doctor por ID',
                data: doctor
            })
        }else{
            res.status(404).json({
                message:'Doctor no encontrado por ID'
            })      
        }
}catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer el Doctor por ID',
            error: err.message
        })
    }
}

export const updateDoctores:RequestHandler = async(req, res)=>{
    try {
        const doctor = await Doctores.findByPk(req.params.id)
        if (doctor) {
            await Doctores.update(req.body,{
                where:{
                    id_doctor : req.params.id
                }
            })
            res.status(200).json({
                message:'Doctor Actualizado',
                data: doctor
            })
        }
        else{
            res.status(404).json({
                message:'Doctor no Encontrado por ID para la Actualizacion'
            })    
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer el Doctor por ID',
            error: err.message
        })
    }
}

export const deleteDoctores:RequestHandler = async(req, res)=>{
    try {
        const doctor = await Doctores.findByPk(req.params.id)
        if (doctor) {
            await Doctores.destroy({
                where:{
                    id_doctor : req.params.id
                }
            })
            res.status(200).json({
                message:'Doctor Eliminado',
                data: doctor
            })
        }
        else{
            res.status(404).json({
                message:'Doctor no Encontrado por ID para la Eliminacion'
            })  
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer al Doctor por ID',
            error: err.message
        })
    }
}