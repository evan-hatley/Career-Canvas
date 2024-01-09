const router = require('express').Router();
const { Job } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newJob = await Job.create({
      title: req.body.title,
      status: req.body.status,
      salary: req.body.salary,
      location: req.body.location,
      notes: req.body.notes,
      user_id: req.session.user_id,
    });

    res.status(200).json(newJob);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id/update', withAuth, async (req, res) => {
  try {
    const jobData = await Job.update({
      title: req.body.title,
      status: req.body.status,
      salary: req.body.salary,
      location: req.body.location,
      notes: req.body.notes,
    },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (!jobData) {
      res.status(404).json({ message: 'No job with this id found' });
      return;
    }

    res.status(200).json(jobData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id/delete', withAuth, async (req, res) => {
  try {
    const jobData = await Job.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!jobData) {
      res.status(404).json({ message: 'No job with this id found' });
      return;
    }

    res.status(200).json(jobData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
