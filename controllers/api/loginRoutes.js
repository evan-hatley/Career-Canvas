const router = require('express').Router();
const { User } = require('../../models');

router.post('/register', (req, res) => {
  const userData = {
      email: req.body.email,
      password: req.body.password
  }

  User.findOne({
      email: req.body.email
  })
  .then(user => {
      if(!user){
          bcrypt.hash(req.body.password, 10, (err, hash) => {
              userData.password = hash
              User.create(userData)
              .then(user => {
                  res.json({status: user.email + ' registered!'})
              })
              .catch(err => {
                  res.send('error: ' + err)
              })
          })
      } else {
          res.json({error: ' user already exists'})
      }
  })
  .catch(err => {
      res.send('error: ' + err)
  })
})

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
