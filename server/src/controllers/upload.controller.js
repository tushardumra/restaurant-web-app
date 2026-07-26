const imagekit = require("../config/imagekit");
const { toFile } = require("@imagekit/nodejs");

const uploadImage = async (req, res) => {
  try {
    // console.log("req.file:", req.file);
    if (!req.file) {
      return res.status(400).json({
        message: "No image uploaded",
      })
    }

    const file = await toFile(req.file.buffer, req.file.originalname, {
      type: req.file.mimetype,
    });

    const result = await imagekit.files.upload({
      file,
      fileName: req.file.originalname,
      folder: "/restaurant-foods",
      useUniqueFileName: true,
    });

    res.status(200).json({
      imageUrl: result.url,
      fileId: result.fileId,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Image upload failed",
      error: error.message,
    });
  }
}

module.exports = { uploadImage };