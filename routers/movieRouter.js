const express = require('express'); 
const router = express.Router();
const movieController = require('../controllers/movieController');

router.route('/getallmovies').get(movieController.getAllMovies);
router.route('/reset').get(movieController.reset);
router.route('/inclikes').post(movieController.incrLikes);
router.route('/declikes').post(movieController.decrLikes);
module.exports = router;