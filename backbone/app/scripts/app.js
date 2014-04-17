define([
    'backbone',
    'collections/todos',
    'models/todo',
    'views/todo',
    'views/todos'
],
function(Backbone, TodosCollection, TodoModel, TodoView, TodosView) {
    'use strict';
    
    return {
        init: function() {

            new TodosView({collection: new TodosCollection()});
            
            Backbone.history.start();
        }
    };
});
