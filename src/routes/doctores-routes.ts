import { Router } from "express";
import { createDoctores, getDoctores, getDoctoresById, getDoctoresCitas, getDoctoresByIdCitas, updateDoctores, deleteDoctores} from "../controller/doctores-controller";

const router= Router();
router.post('/', createDoctores)
router.get('/', getDoctores)
router.get('/:id', getDoctoresById)
router.get('/citas', getDoctoresCitas )
router.get('/citas/:id', getDoctoresByIdCitas )
router.put('/:id', updateDoctores)
router.delete('/:id', deleteDoctores)

export default router