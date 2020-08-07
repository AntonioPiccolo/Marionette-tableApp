const Bb = require('backbone')
const marionette = require('backbone.marionette')
const tableTemplate = require('../Templates/table.handlebars')
const rowView = require('./row')
var data = require('../list.json')
const bootstraps = require('bootstrap')
const $ = require('jquery')


const myCollection = marionette.CollectionView.extend({

    collection: new Bb.Collection(),
    childView: rowView,
    childViewContainer: "tbody",
    template: tableTemplate,

    attributes: {
        index: 0
    },

    initialize: function(){
        var sliceData = data.slice(this.attributes.index,5)
        this.collection.set(sliceData)
    },

    onPrevious: function(){
        if(this.triggerMethod('previousCheck')){
        var sliceData = data.slice(this.attributes.index-5,this.attributes.index)
        this.attributes.index = this.attributes.index -5
        this.collection.set(sliceData)
        }
    },
    onPreviousCheck: function(){
        if(this.attributes.index > 0)
            return true
        else
            return false
    },

    onPage: function(n){
        if(this.triggerMethod('pageCheck',n)){
            var sliceData = data.slice((n-1)*5,n*5)
            this.collection.set(sliceData)
            this.attributes.index = (n-1)*5
        }
    },
    onPageCheck: function(n){
        if((parseInt(n-1)*5) < data.length)
            return true
        else
            return false
    },

    onNext: function(){
        if(this.triggerMethod('nextCheck')){
            this.attributes.index = this.attributes.index +5
            var sliceData = data.slice(this.attributes.index,this.attributes.index+5)
            this.collection.set(sliceData)
        }
    },
    onNextCheck: function(){
        if((data.length - (this.attributes.index +5)) > 0)
            return true
        else
            return false
    },
    
})

module.exports = myCollection