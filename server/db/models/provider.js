const Sequelize = require('sequelize')
const db = require('../db')

const Provider = db.define('provider', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  stripeId: {
    type: Sequelize.STRING
  }
})

module.exports = Provider
