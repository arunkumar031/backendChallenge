const express = require('express');
const app = express();
app.use(express.json());


app.post('/api/total-value', (request,response)=>{
    const products=request.body

    if (!Array.isArray(products)){
        return response.status(400).json({error:'Invalid input, expected an array of products.'})
    }

    let totalValue=0;
    products.forEach(product=>{
        if (product.price!=null && product.quantity!=null){
            totalValue+=product.price*product.quantity
        }
    })

    
    response.send({totalValue})
})

app.listen(3000, ()=>{
    console.log("Server running at https://localhost:3000/")
})
