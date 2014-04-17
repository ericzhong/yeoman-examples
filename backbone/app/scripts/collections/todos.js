/*global define*/

define([
    'underscore',
    'backbone',
    'models/todo',
    'backbone.localStorage'
], function (_, Backbone, TodoModel) {
    'use strict';

    var TodosCollection = Backbone.Collection.extend({
        model: TodoModel,
        
        localStorage: new Backbone.LocalStorage('backbone-generator-todos'),
    });

    return TodosCollection;
});
