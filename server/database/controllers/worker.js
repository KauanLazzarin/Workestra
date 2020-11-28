const mongoose = require('mongoose');
const model = require('../models/worker.js');
const Worker = mongoose.model('Worker');
const utils = require('./../utils/manipulate-data.js');

module.exports = {
    async getWorkers (req, res) {
        try {            
            const data = await Worker.find();
            const workers = utils.getWorkerAtributes(data);
            return res.render('workers.html', {workers})
        } catch (error) {
            console.log(error)
        }
    },

    async createWorker (req, res) {
        try {  
            await Worker.create(req.body);
            return res.redirect('/');
        } catch (error) {
            console.log(error)
        }
    },

    async filterWorkers(req, res)  {
        try {
            const {filterId, actingTime} = req.body;
            const data = await Worker.find();
            const filtredWorkers = utils.filterWorkersData(data, filterId, actingTime);
            
            return res.render('filtred-workers.html', {filtredWorkers});
        } catch (error) {
            
        };
    }

};