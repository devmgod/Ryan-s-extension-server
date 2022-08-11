var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  console.log(req.body)
  const data = req.body;
  const email = "shinwork201@gmail.com, vlsdnapadaylo@gmail.com, vlsdnapadaylo@gmail.com"
  var transporter = require("nodemailer").createTransport({
    host: 'mail.privateemail.com',
    port: 587,
    secureConnection: true,
    auth: {
      user: "support@toptecshare.com",
      pass: "Deep*le@rning!"
    }
  });
  var str = "";
  data.map((e, i) => {
    var c = i+1;
    str += "Subject: PPU" + c + " - " + e[0] + "\nBody: PPU - " + e[2] + " - " + e[1]+"\n\n";
  })

  var mailOptions = {
    from: "support@toptecshare.com",
    to: email,
    subject: 'Reset Password',
    text: 'Hope you are doing well\n\n' + str

    //       Subject: PPU1 - 23Aug
    // Body: PPU - KIX - H3030

  };
  transporter.sendMail(mailOptions, function (err) {
    if (err) { return res.status(500).send({ msg: err.message }); }
    res.status(200).send('A password reset email has been sent to ' + email + '.');
  });
  res.send('respond with a resource');
});

module.exports = router;
