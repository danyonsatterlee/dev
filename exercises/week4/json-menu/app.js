var fs = require('fs');


// fs.readFile('menu.json', 'utf8', function(err, contents) {
//     // console.log(contents);
//     console.log(typeof contents.breakfast[1]);
// });

// or
var contents = fs.readFileSync("menu.json", "utf8");
var menu = JSON.parse(contents);
console.log(menu.breakfast[1]);
