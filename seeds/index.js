const sequelize = require('../config/connection.js');
const Job = require('../models/Job.js');
const User = require('../models/User.js');

const jobData = require('./job-seeds.json');
const userData = require('./user-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Job.bulkCreate(jobData, {
        individualHooks: true,
        returning: true,
    });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();