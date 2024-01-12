const sequelize = require('../config/connection.js');
const Job = require('../models/Job.js');
const User = require('../models/User.js');

const jobData = require('./job-seeds.json');
const userData = require('./user-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    let i = 0;

    for (const job of jobData) {
        await Job.create({
            ...job,
            user_id: users[i].id,
        });

        userIndex = (i + 1) % users.length;
    }

    process.exit(0);
};

seedDatabase();