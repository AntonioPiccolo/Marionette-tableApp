const Bb = require('backbone')
const marionette = require('backbone.marionette')
const viewTemplate = require('./Templates/view.handlebars')
const tableView = require('./table')
const bootstraps = require('bootstrap')
const $ = require('jquery')


const myView = marionette.View.extend({
    
    template: viewTemplate,

    regions: {
        viewRegion: '#box-view'
    },

    className: 'table table-stripped',

    onRender(){
        this.showChildView('viewRegion', new tableView())
    }
})

module.exports = myView