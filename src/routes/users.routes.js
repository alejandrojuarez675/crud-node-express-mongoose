import { Router } from 'express';
import User from './../models/user.model';

const router = Router();

router.get('', async (_req, res, _next) => {
    const users = await User.find();
    res.json(users);
})

export default router;