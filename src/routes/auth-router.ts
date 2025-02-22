import express from 'express'
import { loginUser, logOut, refreshToken, registerUser } from '../controllers/auth-controller'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/refresh_token', refreshToken)
router.post('/logout', logOut)

export default router