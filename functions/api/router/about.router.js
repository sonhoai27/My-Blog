const express = require('express');
const router = express.Router();

const category = require('../../model/Category')
const blog = require('../../model/Blog')
const { insert } = require('../../shared/googleDrive')

router.get("/hello", (req, res, next) => {
    insert('ios-12.jpg', appRoot + '/public/ios12.png')
        .then(result => {
            res.status(200).json({ id: result })
        })
        .catch(err => {
            res.status(403).json({ id: 'error' })
        })
})

module.exports = router