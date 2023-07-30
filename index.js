const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.status(200).send("<h1>Hello World, I am learning CI/CD pipeline and deploying it to kubernetes, head to /about to know what is it!</h1>")
})

app.get('/about',(req,res)=>{
    res.status(200).send("<p>The continuous integration and continuous deployment (CI/CD) pipeline is a series of steps that must be performed in order to deliver a new version of software. CI/CD pipelines are a practice focused on improving software delivery throughout the software development life cycle via automation. By automating CI/CD throughout development, testing, production, and monitoring phases of the software development lifecycle, organizations are able to develop higher quality code, faster. Although it’s possible to manually execute each of the steps of a CI/CD pipeline, the true value of CI/CD pipelines is realized through automation. This time i am deploying it to kubernetes!</p>")
})

app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`);
})

