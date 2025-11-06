const Blog = require("../model/blogs.js");

module.exports.index = async (req, res) => {
  const blogs = await Blog.find({}).populate("owner");
  res.render("./blogs/index.ejs", { blogs });
};

module.exports.blogFillter = async (req, res) => {
  const { category } = req.params;
  try {
    const blogs = await Blog.find({
      category: { $regex: new RegExp(category, "i") },
    }).populate("owner");
    res.render("blogs/index", { blogs }); // reuse same template
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports.renderNewForm = (req, res) => {
  res.render("./blogs/new.ejs");
};

module.exports.createBlog = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  // console.log(url, "..", filename);

  const blog = new Blog(req.body.blog);
  blog.owner = req.user._id;
  blog.image = { url, filename };
  let saveBlog = await blog.save();
  req.flash("success", "Successfully created a new blog!");
  res.redirect("/blogs");
  console.log(saveBlog);
};

module.exports.showBlog = async (req, res, next) => {
  let { id } = req.params;
  const blog = await Blog.findById(id).populate("owner");
  if (!blog) {
    req.flash("error", "Cannot find that blog!");
    return res.redirect("/blogs");
  }
  // console.log(blog);
  res.render("./blogs/show.ejs", { blog });
  // res.send(`Blog ID: ${id}`);
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const blog = await Blog.findById(id);
  if (!blog) {
    req.flash("error", "Cannot find that blog!");
    return res.redirect("/blogs");
  }
  res.render("./blogs/edit.ejs", { blog });
};

module.exports.updateBlog = async (req, res) => {
  let { id } = req.params;
  await Blog.findByIdAndUpdate(
    id,
    { ...req.body.blog },
    { new: true, runValidators: true }
  );
  console.log("updated successfully");
  req.flash("success", "Successfully updated the blog!");
  res.redirect(`/blogs/${id}`);
};

module.exports.deleteBlog = async (req, res) => {
  let { id } = req.params;
  const deletedBlog = await Blog.findByIdAndDelete(id);
  console.log(deletedBlog, "Deleted Successfully");
  req.flash("success", "Successfully deleted the blog!");
  res.redirect("/blogs");
};
