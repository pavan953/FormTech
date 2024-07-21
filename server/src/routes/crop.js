// routes/crop.js
// import express from "express";
// const router = express.Router();
// const { addCrop, getCrops } = require('../controllers/crop.controllers.js');
// const auth = require('../middlewares/auth.js');

// router.post('/', auth, addCrop);
// router.get('/', getCrops);

// module.exports = router;
// src/routes/crop.js

// src/routes/crop.js
import express from 'express';
import { addCrop, getCrops } from '../controllers/crop.controllers.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/', auth, addCrop);
router.get('/', getCrops);

export default router;