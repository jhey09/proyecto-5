const express = require('express')
const router = express.Router()
const userRouter = require('./user')

const authRouter = require('./auth')
const authMiddleware = require('../middleware/authorization')
const registerRouter = require('./register')


const productRouter = require('./product')
router.use('/products', productRouter)

const passwordRouter = require('./Newpassword')
router.use('/changePassword', passwordRouter)

router.use('/auth', authRouter)
router.use('/register', registerRouter)


router.use(authMiddleware)
router.use('/users', userRouter)

module.exports = router