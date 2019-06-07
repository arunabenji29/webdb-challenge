const express = require('express')
const helmet = require('helmet')

const ProjectRouter = require('./work/project/project-router.js')
const ActionRouter = require('./work/action/action-router.js')
const server = express()

server.use(helmet())

server.use(express.json())


server.use('/projects',ProjectRouter)
server.use('/actions',ActionRouter)

const port = 3700;

server.listen(port, ()=>
console.log(`API running at http://localhost:${port}`)
)