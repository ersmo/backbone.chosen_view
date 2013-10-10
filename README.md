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
  value: function(model) {return model.id;},
  span: 'span12',
  placeholder: 'Users',
  multiple: true,
  defaultValue: 1
});
```

## Params

- {Object} options
  - {Backbone.Collection} collection, required
  - {jQuery selector} el, required
  - {String} name, required
  - {String|Function} text, required  
    if String, the text will be the attribute of model from collection  
    if Function, the function pattern must be `function(model) {}`
  - {String|Function} value, required  
    if String, the text will be the attribute of model from collection  
    if Function, the function pattern must be `function(model) {}`
  - {String} span, optional  
    using the bootstrap 2.x class spanX (X for 1-12)
  - {String} placeholder, optional
  - {Boolean} multiple, optional
  - {String|Array} defaultValue, optional
  - {Boolean} allowDeselect, optional  
    allow select noting when the chosen view is in single select mode
  - {Boolean} disabled, optional 
  - {String} groupBy, optional

## Defaults

```coffee
  name: null
  placeholder: null
  multiple: null
  defaultValue: null
  span: 'span4'
  value: null
  text: null
  groupBy: null
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
