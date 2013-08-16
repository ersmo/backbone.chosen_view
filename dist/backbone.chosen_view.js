this["JST"] = this["JST"] || {};

this["JST"]["chosen"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),name = locals_.name,placeholder = locals_.placeholder,multiple = locals_.multiple,disabled = locals_.disabled,span = locals_.span,groupBy = locals_.groupBy,collection = locals_.collection,_ = locals_._,selected = locals_.selected,value = locals_.value,text = locals_.text;buf.push("<select" + (jade.attrs({ 'name':(name), 'data-placeholder':(placeholder), 'multiple':(multiple), 'disabled':(disabled), "class": [('chzn-select'),("" + (span) + "")] }, {"class":true,"name":true,"data-placeholder":true,"multiple":true,"disabled":true})) + ">");
if (!( multiple))
{
buf.push("<option></option>");
}
if ( groupBy)
{
var groupCollection = collection.groupBy(groupBy);
// iterate groupCollection
;(function(){
  var $$obj = groupCollection;
  if ('number' == typeof $$obj.length) {

    for (var key = 0, $$l = $$obj.length; key < $$l; key++) {
      var collection = $$obj[key];

buf.push("<optgroup" + (jade.attrs({ 'label':(key) }, {"label":true})) + ">");
// iterate collection
;(function(){
  var $$obj = collection;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var model = $$obj[$index];

var isSelected = _.contains(selected, value(model).toString());
buf.push("<option" + (jade.attrs({ 'value':(value(model)), 'selected':(isSelected) }, {"value":true,"selected":true})) + ">" + (jade.escape(null == (jade.interp = text(model)) ? "" : jade.interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var model = $$obj[$index];

var isSelected = _.contains(selected, value(model).toString());
buf.push("<option" + (jade.attrs({ 'value':(value(model)), 'selected':(isSelected) }, {"value":true,"selected":true})) + ">" + (jade.escape(null == (jade.interp = text(model)) ? "" : jade.interp)) + "</option>");
    }

  }
}).call(this);

buf.push("</optgroup>");
    }

  } else {
    var $$l = 0;
    for (var key in $$obj) {
      $$l++;      var collection = $$obj[key];

buf.push("<optgroup" + (jade.attrs({ 'label':(key) }, {"label":true})) + ">");
// iterate collection
;(function(){
  var $$obj = collection;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var model = $$obj[$index];

var isSelected = _.contains(selected, value(model).toString());
buf.push("<option" + (jade.attrs({ 'value':(value(model)), 'selected':(isSelected) }, {"value":true,"selected":true})) + ">" + (jade.escape(null == (jade.interp = text(model)) ? "" : jade.interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var model = $$obj[$index];

var isSelected = _.contains(selected, value(model).toString());
buf.push("<option" + (jade.attrs({ 'value':(value(model)), 'selected':(isSelected) }, {"value":true,"selected":true})) + ">" + (jade.escape(null == (jade.interp = text(model)) ? "" : jade.interp)) + "</option>");
    }

  }
}).call(this);

buf.push("</optgroup>");
    }

  }
}).call(this);

}
else
{
// iterate collection.models
;(function(){
  var $$obj = collection.models;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var model = $$obj[$index];

var isSelected = _.contains(selected, value(model).toString());
buf.push("<option" + (jade.attrs({ 'value':(value(model)), 'selected':(isSelected) }, {"value":true,"selected":true})) + ">" + (jade.escape(null == (jade.interp = text(model)) ? "" : jade.interp)) + "</option>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var model = $$obj[$index];

var isSelected = _.contains(selected, value(model).toString());
buf.push("<option" + (jade.attrs({ 'value':(value(model)), 'selected':(isSelected) }, {"value":true,"selected":true})) + ">" + (jade.escape(null == (jade.interp = text(model)) ? "" : jade.interp)) + "</option>");
    }

  }
}).call(this);

}
buf.push("</select>");;return buf.join("");
};
(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone.ChosenView = (function(_super) {
    __extends(ChosenView, _super);

    function ChosenView() {
      this.clearAll = __bind(this.clearAll, this);
      this.lockDropdown = __bind(this.lockDropdown, this);
      this.toggleAll = __bind(this.toggleAll, this);
      this.saveSelected = __bind(this.saveSelected, this);
      this.render = __bind(this.render, this);
      _ref = ChosenView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ChosenView.prototype.template = window.JST.chosen;

    ChosenView.prototype.defaults = {
      name: null,
      placeholder: null,
      multiple: null,
      defaultValue: null,
      span: 'span4',
      value: null,
      text: null,
      groupBy: null,
      subText: null,
      selected: null,
      disabled: false,
      allowDeselect: true
    };

    ChosenView.prototype.events = {
      'change select': 'saveSelected'
    };

    ChosenView.prototype.initialize = function() {
      this.options = _.defaults(this.options, this.defaults);
      this.selected = this.options.defaultValue || [];
      this.listenTo(this.collection, 'reset sync', this.render);
      this.$el.on('toggle-all', this.toggleAll);
      this.$el.on('lock-dropdown', this.lockDropdown);
      this.$el.on('clear-all', this.clearAll);
      return setTimeout(this.render, 0);
    };

    ChosenView.prototype.render = function() {
      var _this = this;
      this.selected = _.isArray(this.selected) ? this.selected : [this.selected];
      this.$el.html(this.template({
        collection: this.collection,
        multiple: this.options.multiple,
        placeholder: this.options.placeholder,
        span: this.options.span,
        name: this.options.name,
        value: _.isFunction(this.options.value) ? this.options.value : function(model) {
          return model.get(_this.options.value);
        },
        text: _.isFunction(this.options.text) ? this.options.text : function(model) {
          return model.get(_this.options.text);
        },
        groupBy: this.options.groupBy,
        subText: this.options.subText,
        selected: _.invoke(this.selected, 'toString'),
        disabled: this.options.disabled
      }));
      this.$('select').chosen({
        allow_single_deselect: this.options.allowDeselect,
        lock_dropdown: this.locked
      });
      return this;
    };

    ChosenView.prototype.saveSelected = function() {
      return this.selected = this.$('select').val();
    };

    ChosenView.prototype.toggleAll = function() {
      this.isSelectAll = !this.isSelectAll;
      this.selected = this.isSelectAll ? this.collection.pluck(this.options.value) : [];
      return this.render();
    };

    ChosenView.prototype.lockDropdown = function() {
      this.isLock = !this.isLock;
      this.locked = this.isLock ? true : false;
      return this.render();
    };

    ChosenView.prototype.clearAll = function() {
      this.selected = [];
      return this.render();
    };

    return ChosenView;

  })(Backbone.View);

}).call(this);
