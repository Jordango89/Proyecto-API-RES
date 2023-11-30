import { RequestHandler } from "express";
import { Especialidades } from "../models/especialidades-model";

export const createEspecialidades:RequestHandler = async (req, res)=>{
    try {
        const especialidad = await Especialidades.create(req.body)
        res.status(200).json({
            message: 'Especialidad Creada Exitosamente',
            data: especialidad
    })
    } catch (error:any) {
        res.status(500).json({
            message: 'La Especialidad no fue Creada',
            error: error.message
        })
    }
}

export const getEspecialidades:RequestHandler = async(req, res)=>{
    try {
        const especialidad = await Especialidades.findAll()
        res.status(200).json({
            message: 'Operacion Exitosa al traer la Especilidad',
            data: especialidad
    }) 
}catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer la Especialidad',
            error: err.message
        })
    }
}

export const getEspecialidadesById:RequestHandler = async(req, res)=>{
    try {
        const especialidad = await Especialidades.findByPk(req.params.id)
        if (especialidad) {
            res.status(200).json({
                message:'Operacion Exitosa al traer la Especialidad por ID',
                data: especialidad
            })
        }else{
            res.status(404).json({
                message:'Especialidad no Encontrada por ID'
            })      
        }
}catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer la Especialidad por ID',
            error: err.message
        })
    }
}

export const updateEspecialidades:RequestHandler = async(req, res)=>{
    try {
        const especialidad = await Especialidades.findByPk(req.params.id)
        if (especialidad) {
            await Especialidades.update(req.body,{
                where:{
                    id_especialidad : req.params.id
                }
            })
            res.status(200).json({
                message:'Especialidad Actualizada',
                data: especialidad
            })
        }
        else{
            res.status(404).json({
                message:'Especialidad no Encontrado por ID para la actualizacion'
            })    
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al Traer la Especialidad por ID',
            error: err.message
        })
    }
}

export const deleteEspecialidades:RequestHandler = async(req, res)=>{
    try {
        const especialidad = await Especialidades.findByPk(req.params.id)
        if (especialidad) {
            await Especialidades.destroy({
                where:{
                    id_especialidad : req.params.id
                }
            })
            res.status(200).json({
                message:'Especialidad Eliminada',
                data: especialidad
            })
        }
        else{
            res.status(404).json({
                message:'Especialidad no Encontrada por ID para la Eliminacion'
            })  
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer la Especialidad por ID',
            error: err.message
        })
    }
}