## new-element

Create DOM elements from HTML with simple templating based on [format-text](http://github.com/azer/format-text)

```js
var newElement = require('new-element')

newElement('<input />')
newElement('<a href="{link}">{text}</a>', { link: 'foo.com', text: 'click' })
```

## Install

```bash
$ npm install new-element
```
