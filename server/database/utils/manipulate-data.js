module.exports = {
    getJobAtributes (jobs) {
        
        let jobAttributes = [];
        
        jobs.forEach((job) => {
            jobAttributes.push({
                name: job.name,
                title: job.vacancy,
                acting: job.acting,
                number: job.number,
                salary: job.salary,
                details: job.details
            })
        });
    
        return jobAttributes;
    },

    getWorkerAtributes (workers) {
        let workerAttributes = [];

        workers.forEach((worker) => {
            workerAttributes.push({
                name: worker.name,
                age: worker.age,
                acting: worker.acting,
                actingTime: worker.time,
                number: worker.number,
                details: worker.details
            });
        });

        return workerAttributes;
    },

    filterJobData (jobs, acting) {
        let filtredJobs = [];

        jobs.forEach((element) => {
            if (element.acting == acting) {
                filtredJobs.push(element);
            }
        });



        return this.getJobAtributes(filtredJobs);
    },

    filterWorkersData (workers, acting, actingTime) {
        let filtredWorkers = [];

        workers.forEach((worker) => {
            if (worker.acting == acting && worker.time >= actingTime) {
                filtredWorkers.push(worker);
            }
        });

        return this.getWorkerAtributes(filtredWorkers);
    }
};