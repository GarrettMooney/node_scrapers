// Scrapes the title, description, and rating for julia packages 
var Xray = require('x-ray');
var x = Xray();

x('https://pkg.julialang.org/', '.pkglisting', [{
        pkg: '.pkgnamedesc a',
        desc: 'h4',
        rating: 'br+ span',
}])
    .write('julia_data.json');
