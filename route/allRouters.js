const express = require('express');
const router = express.Router();
const Task = require('../models/articleSchema'); 
const moment = require("moment");

router.get('/', (req, res) => {
  Task.find()
    .then((articles) => {
      res.render("index", { articles, moment: moment }); // عرض البيانات في صفحة EJS
      // console.log(articles);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("حدث خطأ أثناء جلب البيانات");
    });
});


// مسار POST لإضافة مهمة جديدة
router.post('/add.html', (req, res) => {
  Task.create(req.body)
    .then(() => {
      console.log("send data success");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("send data error");
    });
});

module.exports = router;