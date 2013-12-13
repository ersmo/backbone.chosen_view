(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone.ChosenView = (function(_super) {
    __extends(ChosenView, _super);

    function ChosenView() {
      this.toggleDropdown = __bind(this.toggleDropdown, this);
      this.clearAll = __bind(this.clearAll, this);
      this.selectAll = __bind(this.selectAll, this);
      this.toggleAll = __bind(this.toggleAll, this);
      this.saveSelected = __bind(this.saveSelected, this);
      this.render = __bind(this.render, this);
      _ref = ChosenView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    ChosenView.prototype.template = JST.chosen;

    ChosenView.prototype.defaults = {
      name: null,
      placeholder: null,
      multiple: null,
      defaultValue: null,
      span: 'span4',
      value: null,
      text: null,
      groupBy: null,
      disabled: false,
      allowDeselect: true
    };

    ChosenView.prototype.events = {
      'change select': 'saveSelected'
    };

    ChosenView.prototype.initialize = function() {
      var _this = this;
      this.options = _.defaults(this.options, this.defaults);
      this.valueFn = _.isFunction(this.options.value) ? this.options.value : function(model) {
        return model.get(_this.options.value);
      };
      this.textFn = _.isFunction(this.options.text) ? this.options.text : function(model) {
        return model.get(_this.options.text);
      };
      this.selected = this.options.defaultValue || [];
      this.listenTo(this.collection, 'reset sync', this.render);
      this.$el.on('toggle-all', this.toggleAll);
      this.$el.on('select-all', this.selectAll);
      this.$el.on('clear-all', this.clearAll);
      this.$el.on('toggle-dropdown', this.toggleDropdown);
      return setTimeout(this.render, 0);
    };

    ChosenView.prototype.render = function() {
      this.selected = _.isArray(this.selected) ? this.selected : [this.selected];
      this.$el.html(this.template({
        collection: this.collection,
        multiple: this.options.multiple,
        placeholder: this.options.placeholder,
        span: this.options.span,
        name: this.options.name,
        value: this.valueFn,
        text: this.textFn,
        groupBy: this.options.groupBy,
        selected: _.invoke(this.selected, 'toString'),
        disabled: this.options.disabled,
        _: _
      }));
      this.$('select').chosen({
        allow_single_deselect: this.options.allowDeselect,
        lock_dropdown: this.locked
      });
      if (!_.isEmpty(this.selected)) {
        this.$('select').trigger('change', {
          result: this.selected
        });
      }
      return this;
    };

    ChosenView.prototype.saveSelected = function(e, obj) {
      return this.selected = this.$('select').val() || (obj != null ? obj.result : void 0) || [];
    };

    ChosenView.prototype.toggleAll = function() {
      if (this.isSelectAll === true) {
        return this.clearAll();
      } else {
        return this.selectAll();
      }
    };

    ChosenView.prototype.selectAll = function() {
      this.isSelectAll = true;
      this.selected = this.collection.map(this.valueFn);
      return this.render();
    };

    ChosenView.prototype.clearAll = function() {
      this.isSelectAll = false;
      this.selected = [];
      return this.render();
    };

    ChosenView.prototype.toggleDropdown = function() {
      this.isLock = !this.isLock;
      this.locked = this.isLock ? true : false;
      return this.render();
    };

    return ChosenView;

  })(Backbone.View);

}).call(this);
