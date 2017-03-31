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
