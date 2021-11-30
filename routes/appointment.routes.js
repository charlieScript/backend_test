const router = require('express').Router();
const models = require('../models/');

// create
router.post('/appointment/create', async (req, res) => {
  try {
    const app = await models.Appointment.create(req.body, {
      returning: ['date', 'id'],
    });
    res.status(200).json(app);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.errors);
  }
});

// findALL
router.get('/appointment', async (req, res) => {
  try {
    // a little fix because sequelize can be annoying
    const apps = await models.Appointment.findAll({
      attributes: { exclude: ['name'] },
    });
    res.status(200).json(apps);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.errors);
  }
});

// Find One by Id
router.get('/appointment/:id', async (req, res) => {
  try {
    const app = await models.Appointment.findOne({
      where: {
        id: Number(req.params.id),
      },
      attributes: {
        exclude: ['name'],
      },
    });
    if (app === null) {
      return res.status(404).json({
        message: 'not found provide another id',
      });
    }
    res.status(200).json(app);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'an error occurred',
    });
  }
});

// Update by Id
router.put('/appointment/:id', async (req, res) => {
  try {
    const updated = await models.Appointment.update(req.body, {
      where: {
        id: Number(req.params.id),
      },
    });
    if (updated[0] === 1) {
      const updatedApp = await models.Appointment.findOne({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(201).json(updatedApp);
    }
    if (updated[0] === 0 || updated === null) {
      res.status(404).json({
        message: 'invalid parameters',
      });
    }
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
});

// Delete by Id
router.delete('/appointment/:id', async (req, res) => {
  try {
    const deleted = await models.Appointment.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
    if (deleted) {
      res.status(201).json({ message: 'resource deleted ' });
    } else {
      res.status(404).json({ message: 'resource not found' });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
