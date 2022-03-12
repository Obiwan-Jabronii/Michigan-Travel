const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    saveLocation,
    login,
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(saveLocation, authMiddleware);
router.route('/login').post(login);
router.route('/me').get(authMiddleware, getSingleUser);
 
module.exports = router