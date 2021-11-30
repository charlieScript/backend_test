const router = require('express').Router();
const models = require('../models/');

// create
router.post('/doctor/create', async (req, res) => {
  try {
    const doctor = await models.Doctor.create({
      email: req.body.email.toLowerCase(),
      name: req.body.name.toLowerCase(),
    });
    res.status(200).json(doctor);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.errors);
  }
});

// findALL
router.get('/doctor', async (req, res) => {
  try {
    const doctors = await models.Doctor.findAll({});
    res.status(200).json(doctors);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.errors);
  }
});

// Find One by Id
router.get('/doctor/:id', async (req, res) => {
  try {
    const doctors = await models.Doctor.findOne({
      where: {
        id: Number(req.params.id),
      },
    });
    if (doctors === null) {
      res.status(404).json({
        message: 'not found provide another id',
      });
    }
    res.status(200).json(doctors);
  } catch (error) {
    res.status(400).json(error.errors);
  }
});

// Update by Id
router.put('/doctor/:id', async (req, res) => {
  try {
    const updated = await models.Doctor.update(req.body, {
      where: {
        id: Number(req.params.id),
      },
    });
    if (updated[0] === 1) {
      const updatedDoctor = await models.Doctor.findOne({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(201).json(updatedDoctor);
    }
    if (updated[0] === 0 || updated === null) {
      res.status(404).json({
        message: 'invalid parameters',
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete by Id
router.delete('/doctor/:id', async (req, res) => {
  try {
    const deleted = await models.Doctor.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
    if (deleted) {
      res.status(201).json({ message: 'resource deleted ' });
    } else {
      res.status(404).json({ message: 'resource not found ' });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
