const axios = require("axios");
const router = require("express").router();
const mongoose = require("mongoose");
const cheerio = require("cheerio");
const path = require("path"); 

//Set mongoose to use promises built into ES6
mongoose.Promise = Promise;


//**********************ROUTES**********************//
//api route to get all scraped articles using mongoose
router.get("/", (req, res) => {
    db.Article.find({}).then((data, err) => {
        console.log(data);
        res.json(data);
    });
});
//api route to get all saved articles using mongoose
router.get("/saved", (req, res) => {
    db.Article.find({saved: true}).then((data) => {
        console.log(data);
        res.json(data);
    });
});
//api route to scrape articles using cheerio and add it into mongoDB database collection to_Populate
router.get("/populate_A", (req, res) => {
    axios.get(`https://www.wsj.com`).then((w_res, w_err) => {
        //load html body from axio promise to cheerio
        let $ = cheerio.load(w_res.data);
        //Search for element with a "wsj-headline-link" class, parent class is "frontpage"
        $(".frontpage").each((index, element) => {
            let title = $(element).children(".wsj-card").children("a").text();
            let url = $(element).children(".wsj-card").children("a").attr("href");
            if (title && url) {
                let scrapedInfo = {};
                scrapedInfo.title = title;
                scrapedInfo.url = url;
                db.Article.create(scrapedInfo).then(function (data,error) {
                //If there are no errors, send a message to the server stating article successfully scraped
                    console.log("Scrape successful!");
                }).catch(console.log("Scrape failed!"));
            }
            else {
                console.log("Scrape failed! Title or URL not found.");
            }
        });
    });
});
