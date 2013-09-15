var newElement = require("./");

beforeEach(function(){
  document.body.innerHTML = '';
});

it('creates an element', function(){
  var el = newElement('<input value="whatsup" />');
  expect(el.tagName).to.equal('INPUT');
  expect(el.value).to.equal('whatsup');
});

it('supports formatting', function(){
  var el = newElement('<input value="{val}" class="{cls}" />', { val: 'foo', cls: 'bar' });
  expect(el.value).to.equal('foo');
  expect(el.className).to.equal('bar');
});
