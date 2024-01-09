const router = require('express').Router();
const { Job, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((job) => job.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/job/:id', withAuth, async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const job = jobData.get({ plain: true });

    res.render('job', {
      // Spread syntax = expands elements of an array/object.
      // Useful for creating a copy where you don't want to 
      // modify the original array/object.
      ...job,
      // Boolean session flag.
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/job/:id/modify', withAuth, async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const job = jobData.get({ plain: true });

    res.render('modifyJob', {
      ...job,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route.
router.get('/tracker', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Job }],
    });

    const jobData = await Job.findAll({
      where: {
        user_id: req.session.user_id,
      },
    })

    const user = userData.get({ plain: true });
    const jobs = jobData.map((job) => job.get({ plain: true }));

    res.render('tracker', {
      ...user,
      jobs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/createJob', withAuth, async (req, res) => {
  try {
    res.render('createJob', {
      logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/tracker');
    return;
  }

  res.render('signup');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/tracker');
    return;
  }

  res.render('login');
});

module.exports = router;
