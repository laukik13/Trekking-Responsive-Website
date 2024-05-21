const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: 'Backend/Images/Gallery/Nature',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload= multer({
    storage: storage,
    limits:{
        fileSize:2 * 1024 * 1024,
    },
})


module.exports = upload;