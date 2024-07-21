// routes/user.js
import  express from 'express';
const router = express.Router();
// routes/user.js
import { register, login } from '../controllers/user.contollers.js';
router.post('/register', register);
router.post('/login', login);

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ message: 'logout success' });
    });
 
// user.js
 const userRoutes = router;
export default  userRoutes;