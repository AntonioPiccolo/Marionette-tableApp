const marionette = require('backbone.marionette')
const myDiv = require('./js/divs')
const bootstraps = require('bootstrap')
const $ = require('jquery')


const MyApp = marionette.Application.extend({
    region: 'body',

    onStart: function(){
        this.showView(new myDiv())
    }
})

const myApp = new MyApp()

myApp.start()