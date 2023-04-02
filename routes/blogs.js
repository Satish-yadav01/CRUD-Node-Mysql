const express = require('express')
const router = express.Router();

const {getBlogs,newBlog,getBlog,updateTitle,deleteBlog} = require('../controllers/blogControllers')

router.route('/blogs').get(getBlogs);
router.route('/blog/new').post(newBlog);

router.route('/blog/:id').get(getBlog)  //fetch single blog
    .delete(deleteBlog)

router.route('/blog/:id/:title').put(updateTitle)


module.exports = router;