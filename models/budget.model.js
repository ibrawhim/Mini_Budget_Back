const mongoose = require('mongoose');


let uri = process.env.MY_MONG

mongoose.connect(uri)
.then(()=>{console.log('Mongoose is connected');})
.catch((err)=>{console.log(err);})

let budgetSchema = {
    category: {type: String, required: true},
    budget: {type: String, required: true, unique: true},
    price: {type: String, required: true},
    quantity: {type: String, required: true},
    date: {type: Date, default: Date.now()}
}


let budgtModel = mongoose.model('budgets',budgetSchema)

module.exports = budgtModel