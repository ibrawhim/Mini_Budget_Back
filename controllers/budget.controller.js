const budgetModel = require('../models/budget.model')

const userBudget = (req,res)=>{
    console.log(req.body);
    let info = req.body;
    let form = budgetModel(info)
    form.save()
    .then((result)=>{
        console.log(result);
        res.send({status:true,message: 'budget saved',result})
    })
    .catch((err)=>{
        console.log(err);
    })
}

const userCart = (req,res)=> {
    budgetModel.find()
    .then((result)=>{console.log(result);res.send({status:true,message:'cart',result})})
    .catch((error)=>{console.log(error);})
}

const deleteOne = (req,res) =>{
    budgetModel.deleteOne({budget:req.body.budget,price:req.body.price})
    .then((myResult)=>{
        console.log(myResult);
        console.log(req.body);
        if(myResult){
            budgetModel.find()
            .then((newResult)=>{console.log(newResult); res.send({status:true,message:'updated after deletion',newResult})})
        
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}


module.exports = {userBudget,userCart,deleteOne}
