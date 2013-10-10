# backbone.chosen_view

> Chosen backbone view

## Usage

```js
var view = new Backbone.DatepickerView({
  el: $('.input-user'),
  collection: new Backbone.Collection({
    id: 1,
    name: 'jarvis'
  }, {
    id: 2,
    name: 'kinua'
  }),
  name: 'user_id',
  text: 'name',
  value: 'id',
  span: 'span12',
  placeholder: 'Users',
  multiple: true,
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
  value: null || function(model) {}
  text: null || function(model) {}
  groupBy: null
  subText: null
  selected: null
  disabled: false
  allowDeselect: true
```

## Events

- toggle-all
  toggle select all items or nothing

- select-all
  toggle select all items

- clear-all
  clear selected items

- toggle-dropdown
  toggle the dropdown list to make it not disappear when selected an item. Helpful for selecting multiple items.

Example

```js
var view = new Backbone.DatepickerView({
  el: $('.input-user'),
  collection: collection,
  name: 'user_id',
  text: 'name',
  value: 'id'
});
view.$el.trigger('toggle-all');
```

## License

Copyright (c) 2013 Jarvis Ao Ieong   
Licensed under the MIT license.
