var domify = require("domify");
var format = require("new-format");

module.exports = newElement;

function newElement (html, vars) {
  if (arguments.length == 1) return domify(html);

  return domify(format(html, vars));
}
