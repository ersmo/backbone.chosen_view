
class Backbone.ChosenView extends Backbone.View

  template: JST.chosen

  defaults:
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

  events:
    'change select': 'saveSelected'

  initialize: ->
    @options = _.defaults @options, @defaults
    @valueFn = if _.isFunction @options.value then @options.value else (model) => model.get(@options.value)
    @textFn = if _.isFunction @options.text then @options.text else (model) => model.get(@options.text)

    @selected = @options.defaultValue or []
    @listenTo @collection, 'reset sync', @render
    @$el.on 'toggle-all', @toggleAll
    @$el.on 'select-all', @selectAll
    @$el.on 'clear-all', @clearAll
    @$el.on 'toggle-dropdown', @toggleDropdown
    setTimeout @render, 0

  render: =>
    @selected = if _.isArray(@selected) then @selected else [@selected]
    @$el.html @template
      collection: @collection
      multiple: @options.multiple
      placeholder: @options.placeholder
      span: @options.span
      name: @options.name
      value: @valueFn
      text: @textFn
      groupBy: @options.groupBy
      selected: _.invoke @selected, 'toString'
      disabled: @options.disabled
      _: _
    @$('select').chosen
      allow_single_deselect: @options.allowDeselect
      lock_dropdown: @locked
    if not _.isEmpty @selected
      @$('select').trigger 'change', {result: @selected}
    this

  saveSelected: (e, obj) =>
    @selected = @$('select').val() or obj?.result or []

  toggleAll: =>
    if @isSelectAll is true
      @clearAll()
    else
      @selectAll()

  selectAll: =>
    @isSelectAll = true
    @selected = @collection.map @valueFn
    @render()

  clearAll: =>
    @isSelectAll = false
    @selected = []
    @render()

  toggleDropdown: =>
    @isLock = not @isLock
    @locked = if @isLock then true else false
    @render()
