const marionette = require('backbone.marionette')
const templateNav = require('./Templates/navbar.handlebars')
const newTable = require('./table')
const $ = require('jquery')
const bootstraps = require('bootstrap')
const submit = require('./submit')
const find = require('./find')
//const  icons = require('bootstrap-icons')

const myNav = marionette.View.extend({
    template: templateNav,
    regions: {
        navRegion: '#nav-bar',
        boxDiv: '#box'
    },

    events: {
        'click #submit': 'submitClick',
        'click #find': 'findClick'
    },

    initialize: function(){

    },

    submitClick: function(){
        $('#submit_a').attr('class','nav-link active')
        $('#find_a').attr('class','nav-link')
        this.showChildView('boxDiv', new submit)
    },

    findClick: function(){
        $('#find_a').attr('class','nav-link active')
        $('#submit_a').attr('class','nav-link')
        this.showChildView('boxDiv', new find)
    }
})

module.exports = myNav

