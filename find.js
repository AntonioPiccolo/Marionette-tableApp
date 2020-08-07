const Bb = require('backbone')
const marionette = require('backbone.marionette')
const templateFind = require('./Templates/find.handlebars')
const newTable = require('./table')
const $ = require('jquery')
const bootstraps = require('bootstrap')
const { data } = require('jquery')

const myFind = marionette.View.extend({
    template: templateFind,

    regions: {
        inputRegion: 'div'
    },
    events: {
        'click #btn-find': 'clickBtn'
    },

    clickBtn(){
        let name = $('#name').val()
        let surname = $('#surname').val()
        let age = $('#age').val()

        let array_data = Array.from(require('./list.json'))
        let filtered_array = this.filter(array_data,name,surname,age)

        let table = new newTable
        table.collection.set(filtered_array)
        $("span").text(filtered_array.length)
        
        $('#add').css('display', 'block')
        table.render()
    },

    filter: function(array,name,surname,age){
        let emply_array = []
        for(let i=0; i < array.length; i++){
            if(array[i].name == name){
                if(array[i].surname == surname){
                    if(array[i].age == age)
                        emply_array.push(array[i])
                }
                else if(surname == ""){
                    if(array[i].age == age)
                        emply_array.push(array[i])
                    else if(age == "")
                        emply_array.push(array[i])
                }
            }
            else if(name == ""){
                if(array[i].surname == surname){
                    if(array[i].age == age)
                        emply_array.push(array[i])
                    else if(age == "")
                        emply_array.push(array[i])
                }
                else if(surname == ""){
                    if(array[i].age == age)
                        emply_array.push(array[i])
                }
            }
        }
        return emply_array
    }
})

module.exports = myFind