import { Router } from "express";
const router = Router();
router.post('/', (req, res) => {
    res.json({ message: 'Login exitoso' });
});
export { router as authRoutes };


