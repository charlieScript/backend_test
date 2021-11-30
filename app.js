const express = require('express');
const cors = require('cors');
const db = require('./db');
const doctorRoutes = require('./routes/doctor.routes');
const patientRoutes = require('./routes/patient.routes');
const appRoutes = require('./routes/appointment.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', doctorRoutes);
app.use('/api', patientRoutes);
app.use('/api', appRoutes);

app.use((_req, res) => {
  res.status(404).send({
    success: false,
    error: 'resource not found',
  });
});

app.listen(3000, () => {
  db();
  console.log('server started');
});
