var angular = require('angular');

var <%- name %>Component = require('./<%- name %>Component');
var <%- name %>Directive = require('./<%- name %>Directive');
var <%- name %>Service = require('./<%- name %>Service');
var <%- name %>Filter = require('./<%- name %>Filter');

var <%- name %>Module = '<%- name %>Module';

module.exports = <%- name %>Module;

angular
  .module(<%- name %>Module, [])
  .component('<%- name %>Component', <%- name %>Component)
  .directive('<%- name %>Directive', <%- name %>Directive)
  .factory('<%- name %>Service', <%- name %>Service)
  .filter('<%- name %>Filter', <%- name %>Filter)
  ;
