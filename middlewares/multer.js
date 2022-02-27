const multer  = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {cb(null, __dirname + '/../assets/img/produtos');},
    filename: (req, file, cb) => {cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);}
  });
  
  module.exports = upload = multer({ storage: storage });

 