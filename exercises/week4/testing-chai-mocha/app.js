

var add = function(a,b){
  return a+b;
};

var sub = function(a,b){
  return a-b;
};

var multi = function(a,b){
  return a *b;
};

var divide =  function (a,b){
  return a/b;
}
//export code specify wha tyou wnat to export
module.exports = {
  add:add,
  sub:sub,
  multi:multi,
  divide:divide

};
