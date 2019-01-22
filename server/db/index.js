const db = require('./db')
const Album = require('./album')
const Song = require('./song')
const Artist = require('./artist')

Song.belongsTo(Album)
Song.belongsTo(Artist)
Album.belongsTo(Artist)

Artist.hasMany(Album)
Artist.hasMany(Song)
Album.hasMany(Song)

module.exports = {
  db,
  Album,
  Artist,
  Song
}