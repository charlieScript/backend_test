const router = require('express').Router();
const models = require('../models');

// create
router.post('/patient/create', async (req, res) => {
  try {
    const patient = await models.Patient.create(
      {
        email: req.body.email.toLowerCase(),
        name: req.body.name.toLowerCase(),
        doctor_name: req.body.doctor_name.toLowerCase(),
      },
      {
        returning: ['email', 'name', 'doctor_name', "id"],
      },
    );
    res.status(200).json(patient);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'an error occurred',
    });
  }
});

// findALL
router.get('/patient', async (req, res) => {
  try {
    const patients = await models.Patient.findAll({});
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json(error.errors);
  }
});

// Find One by Id
router.get('/patient/:id', async (req, res) => {
  try {
    const patients = await models.Patient.findOne({
      where: {
        id: Number(req.params.id),
      },
    });
    if (patients === null) {
      res.status(404).json({
        message: 'not found provide another id',
      });
    }
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json(error.errors);
  }
});

// Update by Id
router.put('/patient/:id', async (req, res) => {
  try {
    const updated = await models.Patient.update(req.body, {
      where: {
        id: Number(req.params.id),
      },
    });
    if (updated[0] === 1) {
      const updatedPatient = await models.Patient.findOne({
        where: {
          id: Number(req.params.id),
        },
      });
      res.status(201).json(updatedPatient);
    }
    if (updated[0] === 0 || updated === null) {
      res.status(404).json({
        message: 'invalid parameters',
      });
    }
  } catch (error) {
    res.status(400).json({
      message: 'an error occurred'
    });
  }
});

// Delete by Id
router.delete('/patient/:id', async (req, res) => {
  try {
    const deleted = await models.Patient.destroy({
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
