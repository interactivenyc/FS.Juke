const router = require("express").Router();
const path = require("path");
const { db, Album, Artist, Song } = require(path.join(__dirname, "..", "db"));

// connect your API routes here!

router.get("/", async (req, res, next) => {
  console.log("[Router] get /api/albums");

  try {
    const albums = await Album.findAll({ include: [{ model: Artist }] });
    res.json(albums);
  } catch (err) {
    next(err);
  }
});

router.get("/:albumid", async (req, res, next) => {
  console.log("[Router] get /api/albums/:albumid", req.params.albumid);

  try {
    const albumWithAssociations = await Album.findOne({
      where: { id: req.params.albumid },
      include: [
        { model: Song }, // order: ['id', 'ASC'] }, --> Not Working
        { model: Artist }]
    });

    albumWithAssociations.songs.sort(function(a,b) {
      return a.id - b.id;
    })

    res.json(albumWithAssociations);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
