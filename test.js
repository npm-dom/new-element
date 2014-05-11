var test = require('prova');
var newElement = require("./");

test('creates an element', function (t) {
  reset();

  var el = newElement('<input value="whatsup" />');
  t.equal(el.tagName, 'INPUT');
  t.equal(el.value, 'whatsup');
  t.end();
});

test('supports formatting', function (t) {
  reset();

  var el = newElement('<input value="{val}" class="{cls}" />', { val: 'foo', cls: 'bar' });
  t.equal(el.value, 'foo');
  t.equal(el.className, 'bar');
  t.end();
});

function reset () {
  document.body.innerHTML = '';
}
