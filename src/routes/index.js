import { Router } from 'express'
import categoriaRouter from './categoria'

const router = Router()

router.use('/podcasts', categoriaRouter)

export default router