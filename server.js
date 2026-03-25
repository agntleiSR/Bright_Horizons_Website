const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Configure multer for file uploads
const uploadDir = path.join(__dirname, 'public', 'pics');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const ext = path.extname(file.originalname);
        cb(null, `course_${timestamp}${ext}`);
    }
});

const upload = multer({ storage });

// Serve public files
app.use(express.static(path.join(__dirname, 'public')));
// Serve admin files
app.use('/admin', express.static(path.join(__dirname, 'admin')));

// Upload endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const imagePath = `/pics/${req.file.filename}`;
    console.log('Image uploaded:', imagePath);
    res.json({ success: true, imagePath });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});