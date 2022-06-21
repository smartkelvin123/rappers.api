const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 3000

const rappers =  {
    '21 savage' : {
        'birthname': 'john bin',
    'birthplace' : 'london, England',
    'age' : '29'
    },
    'chance the rapper' : {
        'birthname': 'chancelor bennett',
    'birthplace' : 'LOS ANGELES, California',
    'age' : '29'
    },
    'unknown': {
        'birthname': 'unknown',
    'birthplace' : 'unknown',
    'age' : '0'
  }
}


app.get('/',(request,response) => {
    response.sendFile(__dirname +'/index.html')
})

app.get('/api/:name',(request,response) => {
   const rapperName = request.params.name.toLowerCase()
   if(rappers[rapperName]){
    response.json(rappers[rapperName])
   }
    else{
        response.json(rappers['unknown'])
    }
})
app.listen(  PORT ,() =>{
    console.log(`the server is now running on ${PORT} better go catch it`)
})


 
    


