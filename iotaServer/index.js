const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const multer = require('multer');
const { error, Console } = require('console');

const pdfStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'pdf');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const pdfUpload = multer({ storage: pdfStorage })

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'supply_chain',
});


