var Xray = require('x-ray');
var x = Xray({
    filters: {
        cleanUpText: function (value) { return value.replace('\r\n\t\t\t\t\t\t\t\t', '').replace('\t\t\t\t\t\t\t', ''); },
    }
});


x('http://store.steampowered.com/search/?filter=topsellers', '#search_results div div a', [{
        title: '.responsive_search_name_combined .search_name .title ',
        price: '.col.search_price.responsive_secondrow | cleanUpText', // calling filter function 'cleanUpText'
}])
    .paginate('.search_pagination_right a.pagebtn:last-child@href')
    .limit(10)
    .write('steam_data.json');
