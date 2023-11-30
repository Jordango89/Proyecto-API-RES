import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import { Citas } from "./citas-model";
import { Telefonos } from "./telefonos-model";

@Table({
    timestamps:false,
    tableName: 'pacientes'
})
export class Pacientes extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull:false,
        primaryKey:true
    })
    id_paciente!:number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nombre!:string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    apellido!:string

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    fecha_nac!:Date

    @HasMany(()=> Citas)
    citas!: Citas

    @HasMany(()=> Telefonos)
    telefonos!: Telefonos

}