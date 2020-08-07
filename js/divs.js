const Bb = require('backbone')
const marionette = require('backbone.marionette')
const divsTemplate = require('../Templates/divs.handlebars')
const navBar = require('./navbar')
const myView = require('./view')
const btnCollection = require('./btnCollection')
const data = require('../list.json')
const bootstraps = require('bootstrap')
const $ = require('jquery')


const myDiv = marionette.View.extend({
    template: divsTemplate,

    regions: {
        inputRegion: '#input-region',
        tableRegion: '#table-region',
        btnRegion: '#btn-region'
    },

    onRender(){
        this.showChildView('inputRegion', new navBar)
        this.showChildView('tableRegion', new myView)
        this.showChildView('btnRegion', new btnCollection)
    }
})

module.exports = myDiv