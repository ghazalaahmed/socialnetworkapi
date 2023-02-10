const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  updateUser,
} = require('../../controllers/usercontroller');

// /api/user
router.route('/').get(getAllUser).post(createUser);

// /api/uers/:userId
router.route('/:userId').get(getUserById).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);



module.exports = router;
