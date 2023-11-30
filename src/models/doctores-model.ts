import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Especialidades } from "./especialidades-model";
import { Citas } from "./citas-model";

@Table({
    timestamps:false,
    tableName: 'doctores'
})
export class Doctores extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull:false,
        primaryKey:true
    })
    id_doctor!:number

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
        type: DataType.STRING,
        allowNull: false
    })
    correo!:string

    @ForeignKey(()=>Especialidades)

    @Column({
        type:DataType.INTEGER,
        allowNull: false
    })
    id_especialidad!:number

    @HasMany(()=> Citas)
    citas!: Citas

    @BelongsTo(()=> Especialidades)
    especialidades!: Especialidades

}