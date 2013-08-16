# backbone.chosen_view

> Chosen backbone view

## Usage

```js
var view = new Backbone.DatepickerView({
  el: @$('.input-website')
  collection: new Backbone.Collection({
    id: 1,
    name: 'jarvis'
  }, {
    id: 2,
    name: 'kinua'
  }),
  name: 'website_id'
  text: 'name'
  value: 'id'
  span: 'span12'
  placeholder: 'Website'
  multiple: true
  defaultValue: 1
});
```

## Options

```coffee
defaults:
  name: null
  placeholder: null
  multiple: null
  defaultValue: null
  span: 'span4'
  value: null
  text: null
  groupBy: null
  subText: null
  selected: null
  disabled: false
  allowDeselect: true
```

## License

Copyright (c) 2013 Jarvis Ao Ieong   
Licensed under the MIT license.
