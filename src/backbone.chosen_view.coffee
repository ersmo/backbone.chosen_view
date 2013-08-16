
class Backbone.ChosenView extends Backbone.View

  template: window.JST.chosen

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

  events:
    'change select': 'saveSelected'

  initialize: ->
    @options = _.defaults @options, @defaults
    @selected = @options.defaultValue or []
    @listenTo @collection, 'reset sync', @render
    @$el.on 'toggle-all', @toggleAll
    @$el.on 'lock-dropdown', @lockDropdown
    @$el.on 'clear-all', @clearAll
    setTimeout @render, 0

  render: =>
    @selected = if _.isArray(@selected) then @selected else [@selected]
    @$el.html @template
      collection: @collection
      multiple: @options.multiple
      placeholder: @options.placeholder
      span: @options.span
      name: @options.name
      value: if _.isFunction @options.value then @options.value else (model) => model.get(@options.value)
      text: if _.isFunction @options.text then @options.text else (model) => model.get(@options.text)
      groupBy: @options.groupBy
      subText: @options.subText
      selected: _.invoke @selected, 'toString'
      disabled: @options.disabled
    @$('select').chosen
      allow_single_deselect: @options.allowDeselect
      lock_dropdown: @locked
    this

  saveSelected: =>
    @selected = @$('select').val()

  toggleAll: =>
    @isSelectAll = not @isSelectAll
    @selected = if @isSelectAll then @collection.pluck @options.value else []
    @render()

  lockDropdown: =>
    @isLock = not @isLock
    @locked = if @isLock then true else false
    @render()

  clearAll: =>
    @selected = []
    @render()
