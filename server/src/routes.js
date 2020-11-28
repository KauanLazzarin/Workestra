const express = require('express');
const server = express();
const nunjucks = require('nunjucks');
const contractorControllers = require('./../database/controllers/contractor.js');
const worker = require('./../database/controllers/worker.js');
const workerControllers = require('./../database/controllers/worker.js');

nunjucks.configure('pages', {
    autoescape: true,
    express: server
})

server.get('/', (req, res) => {
    return res.render('index.html');
});

server.get('/hire-as-worker', (req, res) => {
    return res.render('work.html')
});

server.get('/hire-as-contractor', (req, res) => {
    return res.render('hire.html')
});


// POSTS AND GETS TO THE DB

server.get('/works', contractorControllers.getWorks);

server.post('/hire', contractorControllers.contractorRegister);

server.post('/filter-jobs', contractorControllers.filterJobs);


server.get('/workers', workerControllers.getWorkers)

server.post('/work', workerControllers.createWorker);

server.post('/filter-works', workerControllers.filterWorkers);


module.exports = server;