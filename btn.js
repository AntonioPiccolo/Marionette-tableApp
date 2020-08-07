const Bb = require('backbone')
const marionette = require('backbone.marionette')
const btnTemplate = require('./Templates/btn.handlebars')
const tableView = require('./table')
const divs = require('./divs')
const btnCollection = require('./btnCollection')
const bootstraps = require('bootstrap')
const $ = require('jquery')


const radio = require('backbone.radio')

const newRadio = radio.channel('btnChannel')

const myBtn = marionette.View.extend({

    template: btnTemplate,
    regions: {
        btnRegion: 'li'
    },

    events: {
        'click': 'clickAction'
    },

    initialize: function(){
        var newTable = new tableView
        this.triggerMethod('checkAll', this.model.attributes.name, newTable)
        newRadio.on('btnUpdate', (newTable,name,id) =>{
            if(name == 'Next'){
                
                if(this.model.attributes.name == 'Previous' || this.model.attributes.name == 'Next'){
                }
                else{
                    this.model.attributes.name = parseInt(this.model.attributes.name)+1
                }
                this.triggerMethod('checkAll', this.model.attributes.name, newTable)
                this.render()

            }
            else if(name == 'Previous'){
                if(this.model.attributes.name == 'Previous' || this.model.attributes.name == 'Next'){
                
                }
                else{
                    this.model.attributes.name = parseInt(this.model.attributes.name)-1
                }   
                this.triggerMethod('checkAll', this.model.attributes.name, newTable)
                this.render()             
            } 
            else if(this.model.attributes.name != 'Previous' || this.model.attributes.name != 'Next'){
                if(this.model.attributes.name == 'Previous' || this.model.attributes.name == 'Next'){
                    this.triggerMethod('checkAll', this.model.attributes.name, newTable)
                    this.render()
                }
                else{
                    if(id == 'd'){

                        newTable.triggerMethod('page', parseInt(name))
                        
                        if(this.model.attributes.id == 'b'){
                            this.model.attributes.name = name                       
                            this.triggerMethod('checkAll', this.model.attributes.name, newTable)
                            this.render()
                        }
                        else if(this.model.attributes.id == 'c'){
                            this.model.attributes.name = parseInt(name) +1                          
                            this.triggerMethod('checkAll', this.model.attributes.name, newTable)
                            this.render()
                        }
                        else{
                            this.model.attributes.name = parseInt(name) +2                          
                            this.triggerMethod('checkAll', this.model.attributes.name, newTable)
                            this.render()
                        }
                    }
                    if(id == 'c'){
                        newTable.triggerMethod('page', parseInt(name))
                        if(this.model.attributes.id == 'b'){
                            this.model.attributes.name = name                       
                            this.triggerMethod('checkAll', this.model.attributes.name, newTable)
                            this.render()
                        }
                        else if(this.model.attributes.id == 'c'){
                            this.model.attributes.name = parseInt(name) +1                          
                            this.triggerMethod('checkAll', this.model.attributes.name, newTable)
                            this.render()
                        }
                        else{
                            this.model.attributes.name = parseInt(name) +2                          
                            this.triggerMethod('checkAll', this.model.attributes.name, newTable)
                            this.render()
                        }
                    }
                    if(id == 'b'){
                        newTable.triggerMethod('page', parseInt(name))
                    }
                }      
            }        
        })
    },

    clickAction: function(e){
        const name = $(e.target).attr("name")
        const id = $(e.target).attr("id")
        var newTable = new tableView()
        this.triggerMethod('checkBtn', this.model, newTable)
        this.triggerMethod('checkAll', this.model.attributes.name, newTable)
        newRadio.trigger('btnUpdate', newTable, name, id)
        this.triggerMethod('checkAll', this.model.attributes.name, newTable)
        this.render()
    },

    onCheckAll: function(name, newTable){
        if(name == 'Previous'){
            if(newTable.triggerMethod('previousCheck') == true)
                this.model.attributes.disable = false
            else
                this.model.attributes.disable = true
        }
        if(name == 'Next'){
            if(newTable.triggerMethod('nextCheck') == true)
                this.model.attributes.disable = false
            else
                this.model.attributes.disable = true
        }
        else{
            if(newTable.triggerMethod('pageCheck',name) == true)
                this.model.attributes.disable = false
            else
                this.model.attributes.disable = true
        }
    },

    onCheckBtn: function(model,table){
        if(model.attributes.name == 'Previous'){
            if(table.triggerMethod('previousCheck')){
                table.triggerMethod('previous')
            }
        }
        else if(model.attributes.name == '1'){
            if(table.triggerMethod('pageOneCheck')){
                table.triggerMethod('pageOne')
            }
        }
        else if(model.attributes.name == '2'){
            if(table.triggerMethod('pageTwoCheck'))
                table.triggerMethod('pageTwo')
        }

        else if(model.attributes.name == '3'){
            if(table.triggerMethod('pageThreeCheck'))
                table.triggerMethod('pageThree')
        }
        else if(model.attributes.name == 'Next'){
            if(table.triggerMethod('nextCheck'))
                table.triggerMethod('next')
        }

    }
})

module.exports = myBtn