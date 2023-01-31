const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateCThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").get(getThoughts).post(createThoughts);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route("/:thoughtId/reactions")
  .post(addReaction);
  
  router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);

  module.exports = router;
