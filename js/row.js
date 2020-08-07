const marionette = require('backbone.marionette')
const rowTemplate = require('../Templates/row.handlebars')
const bootstraps = require('bootstrap')
const $ = require('jquery')


const myView = marionette.View.extend({
    tagName: 'tr',
    template: rowTemplate
})

module.exports = myView