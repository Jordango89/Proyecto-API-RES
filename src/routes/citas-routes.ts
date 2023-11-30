import { Router } from "express";
import { createCitas, getCitas, getCitasById, updateCitas, deleteCitas } from "../controller/citas-controller";

const router= Router();
router.post('/', createCitas)
router.get('/', getCitas)
router.get('/:id', getCitasById)
router.put('/:id', updateCitas)
router.delete('/:id', deleteCitas)

export default router