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