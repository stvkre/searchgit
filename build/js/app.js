(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "fc34a1ec298a27ad7d25cd946aa02b7466183f08";

},{}],2:[function(require,module,exports){
//Accessing apiKey//
var apiKey = require('./../.env').apiKey;

//This is a function created to enhance repo access//
Repos = function() {

};

//Prototype(for user display)//
Repos.prototype.getUser = function(name, displayFunction) {
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(users) {
    displayFunction(users);
    // console.log(users);
  }).fail(function(error) {
    $(".showUser").text("This Username " + name + " is " + error.responseJSON.message + "." + "Please Enter the Correct Username");
  });
};
//Prototype(for repos display)//
Repos.prototype.getRepos = function(name, displayFunction) {
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(repos) {
    displayFunction(repos);
    // console.log(repos);
  }).fail(function(error) {
    $('.showUser').text("This Username " + name + " is " + error.responseJSON.message + "." + "Please Enter the Correct Userrepository");
  });
};

//exports//
exports.reposModule = Repos;

},{"./../.env":1}],3:[function(require,module,exports){
var Repos = require('./../js/username.js').reposModule;

//To display user//
var displayUser = function(user) {
  $('ol#userPerson').empty();
  $('ol#userPerson').append("<li>" + user.name + "</li>");
};

//To display repos//
var displayData = function(repos) {
  $('ol#repoUrl').empty();
  repos.forEach(function(repo) {
    $('ol#repoUrl').append("<li><a href='" + repo.html_url + "'>" + repo.name + "</a>: " + repo.description + "; created on " + repo.created_at + "</li> ");
  });
};

//Front-end part//
$(document).ready(function() {
  var searchUsers = new Repos();
  $('#finderUser').submit(function(event) {
    event.preventDefault();
    var name = $('#userName').val();
    console.log(name);
    searchUsers.getUser(name, displayUser);
    searchUsers.getRepos(name, displayData);
  });
});

},{"./../js/username.js":2}]},{},[3]);
