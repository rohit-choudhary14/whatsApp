const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/profile/pictures');
    },
    filename: (req, file, cb) => {
        const authId = req.params.authId;
        const originalName = file.originalname;
        const newFileName = `${authId}.jpg`;
        cb(null, newFileName);
       
    },
});
const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/chats/images');
    },
    filename: (req, file, cb) => {
        const originalName = file.originalname;
        const fileExtension = file.originalname.split('.').pop();
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 8);
        const randomFileName = `${timestamp}_${randomString}.${fileExtension}`;
        const newFileName =randomFileName;
        cb(null, newFileName);
        req.sClassName = req.body.sClassName;
        req.rClassName = req.body.rClassName;
        req.reciverId = req.body.reciverId;
        req.chat = req.body.message;
        req.newFileName=newFileName;
    },
});
  
const upload = multer({ storage });
const destructure = multer({ storage: storage2  });
module.exports={
    upload,
    destructure
}