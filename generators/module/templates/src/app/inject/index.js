var angular = require('angular');

var <%- name %>Component = require('./<%- name %>Component');
var <%- name %>Directive = require('./<%- name %>Directive');
var <%- name %>Service = require('./<%- name %>Service');
var <%- name %>Filter = require('./<%- name %>Filter');

var <%- name %>Module = '<%- name %>Module';

module.exports = <%- name %>Module;

angular
  .module(<%- name %>Module, [<%- name %>Directive, <%- name %>Service, <%- name %>Filter])
  .component('<%- name %>Component', <%- name %>Component)
  ;
