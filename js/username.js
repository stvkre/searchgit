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
