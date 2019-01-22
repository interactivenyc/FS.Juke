const Sequelize = require('sequelize')
const db = require('./db')

const Artist = db.define('artists', {
  name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

module.exports = Artist