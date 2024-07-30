import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
    // for now the file name is not unique can changes later
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ 
    storage,
})