const Sequelize = require('sequelize')
const db = require('./db')

const Album = db.define('albums', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artworkUrl: {
    type: Sequelize.STRING,
    defaultValue: 'default-album.jpg'
  }
});

module.exports = Album