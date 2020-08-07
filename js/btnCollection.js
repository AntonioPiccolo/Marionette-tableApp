const Bb = require('backbone')
const marionette = require('backbone.marionette')
const btnCollectionTemplate = require('../Templates/btnCollection.handlebars')
const btnView = require('./btn')
var data = require('../list.json')
const bootstraps = require('bootstrap')
const $ = require('jquery')


const btnCollection = marionette.CollectionView.extend({

    collection: new Bb.Collection([{name: "Previous",disable: null, id: "a", bold: false},{name: "1",disable: null,id: "b", bold: true},{name: "2", disable: null, id: "c", bold: false},{name: "3", disable: null, id: "d", bold: false},{name: "Next", disable: null, id: "e", bold: false}]),
    childView: btnView,
    childViewContainer: "ul",
    template: btnCollectionTemplate

})

module.exports = btnCollection