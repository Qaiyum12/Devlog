const express = require("express");
const router = express.Router();
const Blog = require("../model/blogs.js");
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isOwner, validateBlog } = require("../middleware.js");
const blogController = require("../controllers/blog.js");

const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

//Blog Routes, create blog post route
router
  .route("/")
  .get(wrapAsync(blogController.index))
  .post(isLoggedIn,  upload.single("blog[image]"), validateBlog, wrapAsync(blogController.createBlog));
  
// blogs filter by category
router.get('/category/:category', wrapAsync(blogController.blogFillter));


//create blog form
router.get("/new", isLoggedIn, blogController.renderNewForm);

//Show individual blog, Update blog route, Delete blog route
router
  .route("/:id")
  .get(wrapAsync(blogController.showBlog))
  .put(isLoggedIn, isOwner, validateBlog, wrapAsync(blogController.updateBlog))
  .delete(isLoggedIn, isOwner, wrapAsync(blogController.deleteBlog));

// Edit blog routes
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(blogController.renderEditForm)
);

module.exports = router;
