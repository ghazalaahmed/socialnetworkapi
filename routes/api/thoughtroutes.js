const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").get(getAllThought).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:Id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
  .route("/:thoughtId/reactions")
  .post(addReaction);
  
  router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReaction);

  module.exports = router;
