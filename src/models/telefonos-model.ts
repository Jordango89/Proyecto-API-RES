import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo} from "sequelize-typescript";
import { Pacientes } from "./pacientes-model";
@Table({
    timestamps: false,
    tableName: 'telefonos'
})
export class Telefonos extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
    id_telefono!:number
    
    @ForeignKey(()=>Pacientes)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        
    })
    id_paciente!:number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    telefono!:string

    @BelongsTo(()=> Pacientes)
    pacientes!: Pacientes
    
}