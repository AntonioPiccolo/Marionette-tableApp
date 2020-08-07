const marionette = require('backbone.marionette')
const templateInput = require('./Templates/submit.handlebars')
const newTable = require('./table')
const $ = require('jquery')
const bootstraps = require('bootstrap')

const mySubmit = marionette.View.extend({
    template: templateInput,
    regions: {
        inputRegion: 'div'
    },
    events: {
        'click #btn-submit': 'clickBtn'
    },

    clickBtn: function(){
        let name = $('#name').val()
        let surname = $('#surname').val()
        let age = $('#age').val()
        
        let obj = {
            "name": name,
            "surname": surname,
            "age": age
        }

        let array_data = Array.from(require('./list.json'))
        array_data.unshift(obj)

        let table = new newTable
        let sliceData = array_data.slice(0,5)
        table.collection.set(sliceData)
        $('#add').css('display', 'block')
        table.render()
    }
})

module.exports = mySubmit