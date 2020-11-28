const mongoose = require('mongoose');
const contractorModels = require('../models/contractor.js')
const Jobs = mongoose.model('Contractor');
const utils = require('../utils/manipulate-data.js');

module.exports = {
    async contractorRegister (req, res) {
        try {
            await Jobs.create(req.body);
            return res.redirect('/');
        } catch (error) {
            console.log(error)
        }
    },

    async getWorks (req, res) {
        try {      
            const jobs  = await Jobs.find();
            const manipulatedJobData = utils.getJobAtributes(jobs);
            return res.render('jobs.html', {manipulatedJobData});
        } catch (error) {
            console.error(error)
        }
    },

    async filterJobs (req, res) {
        try {
            const param = req.body.filterId;
            const data = await Jobs.find();
            
            const filtredJobs = utils.filterJobData(data, param);

            return res.render('filtred-jobs.html', {filtredJobs});
        } catch (error) {
            console.log(error)
        }
    }
}