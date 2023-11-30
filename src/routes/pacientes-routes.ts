import { Router } from "express";
import { createPacientes, getPacientes, getPacientesById, updatePacientes, deletePacientes} from "../controller/pacientes-controller";

const router= Router();
router.post('/', createPacientes)
router.get('/', getPacientes)
router.get('/:id', getPacientesById)
router.put('/:id', updatePacientes)
router.delete('/:id', deletePacientes)

export default router