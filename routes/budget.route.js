const express = require('express')
const router = express.Router()
const {userBudget,userCart,deleteOne} = require('../controllers/budget.controller')

router.post('/addbudget',userBudget)
router.get('/cart',userCart)
router.post('/delete',deleteOne)

module.exports = router