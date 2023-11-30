import { Pacientes } from "../models/pacientes-model";
import { Request, RequestHandler } from "express";
import { Telefonos } from "../models/telefonos-model";

export const createPacientes:RequestHandler = async (req, res)=>{
    try {
        const paciente = await Pacientes.create(req.body)
        res.status(200).json({
            message: 'Paciente Creado Exitosamente',
            data: paciente
    })
    } catch (error:any) {
        res.status(500).json({
            message: 'El Paciente no fue Creado',
            error: error.message
        })
    }
}

export const getPacientes:RequestHandler = async(req, res)=>{
    try {
        const paciente = await Pacientes.findAll({
            include: [{
                model:Telefonos,
                attributes:['telefono']
            }]
        })
        res.status(200).json({
            message: 'Operacion Exitosa al traer los Pacientes',
            data: paciente
    }) 
}catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al Traer los Pacientes',
            error: err.message
        })
    }
}

export const getPacientesById:RequestHandler = async(req, res)=>{
    try {
        const paciente = await Pacientes.findByPk(req.params.id,{
            include: [{
                model:Telefonos,
                attributes:['telefono']
            }]
        })
        if (paciente) {
            res.status(200).json({
                message:'Operacion exitosa al traer al paciente por ID',
                data: paciente
            })
        }else{
            res.status(404).json({
                message:'Paciente no Encontrado por ID'
            })      
        }
}catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer el Paciente por ID',
            error: err.message
        })
    }
}

export const updatePacientes:RequestHandler = async(req, res)=>{
    try {
        const paciente = await Pacientes.findByPk(req.params.id)
        if (paciente) {
            await Pacientes.update(req.body,{
                where:{
                    id_paciente : req.params.id
                }
            })
            res.status(200).json({
                message:'Paciente Actualizado',
                data: paciente
            })
        }
        else{
            res.status(404).json({
                message:'Paciente no Encontrado por ID para la Actualizacion'
            })    
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer el Paciente por ID',
            error: err.message
        })
    }
}

export const deletePacientes:RequestHandler = async(req, res)=>{
    try {
        const paciente = await Pacientes.findByPk(req.params.id)
        if (paciente) {
            await Pacientes.destroy({
                where:{
                    id_paciente : req.params.id
                }
            })
            res.status(200).json({
                message:'Paciente Eliminado',
                data: paciente
            })
        }
        else{
            res.status(404).json({
                message:'Paciente no Encontrado por ID para la Eliminacion'
            })  
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer el paciente por ID',
            error: err.message
        })
    }
}

