// Scrapes the title, rank, and votes for the reddit home page 
// then writes to 'reddit_data.json'
var Xray = require('x-ray');
var x = Xray();

x('https://www.reddit.com/', '.link', [{
        title: '.title.may-blank',
        rank: '.rank',
        score: '.score',
}])
    .write('reddit_data.json');
