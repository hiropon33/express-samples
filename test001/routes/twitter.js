var express = require("express");
var Twitter = require("twitter");
var config = require('../../config.json');
var router = express.Router();

var client = new Twitter({
  consumer_key: config.twitterApi.consumer_key,
  consumer_secret: config.twitterApi.consumer_secret,
  access_token_key: config.twitterApi.access_token_key,
  access_token_secret: config.twitterApi.access_token_secret
});

// 本番ではpostにする
router.get("/sendDM", function(req, res, next) {
  var params = {screen_name: 'devcraft_818',text:"こんにちは！"};
  console.log("@" + params.screen_name);
  client.post("direct_messages/new", params, 
  function(error, text, response) {
    if (!error) {
      console.log(text);
    } else {
      console.log(error);
    }
  });
});

// router.post("/getDM/", function(req, res, next) {
//   var params = {count: 10};
//   client.get('direct_messages', params, function(error,messages,response){
//     if (!error) {
//         console.log(messages);
//         fs.appendFileSync("DM.json",JSON.stringify(messages) + "\n","utf-8");
//     }
//   });
// });

module.exports = router;
