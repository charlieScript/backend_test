'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.Doctor, {
        foreignKey: 'doctor_name',
      });
      Appointment.belongsTo(models.Patient, {
        foreignKey: 'patient_name',
      });
    }
  }
  Appointment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      appointment_reason: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      doctor_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      patient_name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Appointment',
      tableName: 'Appointments',
    },
  );
  return Appointment;
};
