import { Router } from "express";
import { createTelefonos, getTelefonos, getTelefonosById, updateTelefonos, deleteTelefonos } from "../controller/telefonos-controller";

const router= Router();
router.post('/', createTelefonos)
router.get('/', getTelefonos)
router.get('/:id', getTelefonosById)
router.put('/:id', updateTelefonos)
router.delete('/:id', deleteTelefonos)

export default router