import { Router } from "express";
const router = Router();
router.get('/', (req, res) => {
    res.json({ message: 'Comisiones cargadas' });
});
export const commissionsRoutes = router;