'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      appointment_reason: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      doctor_name: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Doctors',
          key: 'name',
        },
      },
      patient_name: {
        type: Sequelize.STRING,
        references: {
          model: 'Patients',
          key: 'name',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Appointments');
  },
};
