const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// here we connecting to our cloudinary account
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// here we define our cloudinary storage where we store our files/images
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'devlog_blogs',  // here we need to give our folder name
    allowedFormat: ["png", "jpeg", "jpg"], // here we need to specify that in which format we want to store our files.
  },
});

module.exports = {
    cloudinary,
    storage,
};
