const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const productRouter = require('./product')
const authRouter = require('./auth')
const authMiddleware = require('../middleware/authorization')
const registerRouter = require('./register')
const passwordRouter = require('./Newpassword')

//router.use('/changeps', passwordRouter)
router.use('/auth', authRouter)
router.use('/register', registerRouter)
router.use('/products', productRouter)

router.use(authMiddleware)
router.use('/users', userRouter)

module.exports = router