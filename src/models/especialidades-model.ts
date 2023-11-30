import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Doctores } from "./doctores-model";

@Table({
    timestamps:false,
    tableName:'especialidades'
})
export class Especialidades extends Model{
    @Column({
        type:DataType.INTEGER,
        allowNull:false,
        primaryKey:true
    })
    id_especialidad!:number

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    nombre!:string

    @HasMany(()=> Doctores)
    doctores!: Doctores

}
