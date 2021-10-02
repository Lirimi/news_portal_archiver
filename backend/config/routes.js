import express from 'express';

import { getData } from '../controllers/getScrappedData.js'

const router = express.Router();

router.get('/getData', getData);

export default router;