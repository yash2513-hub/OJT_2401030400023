const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../NodeJS_Task/uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage });

// Route for file upload
app.post('/upload', upload.single('myFile'), (req, res) => {
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
