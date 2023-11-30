import { RequestHandler } from "express";
import { Telefonos } from "../models/telefonos-model";

export const createTelefonos:RequestHandler = async(req, res)=>{
    try {
        const telefonos = await Telefonos.create(req.body)
        res.status(200).json({
            message: 'Se Creo el Número de Telefono',
            data: telefonos
        })
    } catch (error:any) {
        res.status(500).json({
            message: 'No se pudo crear el Telefono',
            error:error.message
        })
    }
}

export const getTelefonos:RequestHandler = async(req, res)=>{
    try {
        const telefonos = await Telefonos.findAll()
        res.status(200).json({
            message: 'Se trajeron todos los Telefonos Exitosamente',
            data: telefonos
    }) 
}catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'No se pudo traer los Telefonos',
            error: err.message
        })
    }
}

export const getTelefonosById:RequestHandler = async(req, res)=>{
    try {
        const telefono = await Telefonos.findByPk(req.params.id)
        if (telefono) {
            res.status(200).json({
                message:'Se trajero todos los Telefonos Exitosamente por ID',
                data: telefono
            })
        }else{
            res.status(404).json({
                message:'Telefono no Encontrado por ID'
            })      
        }
}catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer el Telefono por ID',
            error: err.message
        })
    }
}

export const updateTelefonos:RequestHandler = async(req, res)=>{
    try {
        const telefono = await Telefonos.findByPk(req.params.id)
        if (telefono) {
            await Telefonos.update(req.body,{
                where:{
                    id_telefono : req.params.id
                }
            })
            res.status(200).json({
                message:'Telefono Actualizado',
                data: telefono
            })
        }
        else{
            res.status(404).json({
                message:'Telefono no Encontrado por ID para la Actualizacion'
            })    
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer el Telefono por ID',
            error: err.message
        })
    }
}

export const deleteTelefonos:RequestHandler = async(req, res)=>{
    try {
        const telefono = await Telefonos.findByPk(req.params.id)
        if (telefono) {
            await Telefonos.destroy({
                where:{
                    id_telefono : req.params.id
                }
            })
            res.status(200).json({
                message:'Telefono Eliminado',
                data: telefono
            })
        }
        else{
            res.status(404).json({
                message:'Telefono no Encontrado por ID para la Eliminacion'
            })  
        }
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            message: 'Error al traer el Telefono por ID',
            error: err.message
        })
    }
}