/**
 * Application for dropdown site menu 
 */

var app = angular.module('app', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {

	// For any unmatched url, send to /home
	$urlRouterProvider.otherwise("/home")
	/*$urlRouterProvider.otherwise("#")*/

	$stateProvider.state('#', {
	}).state('home', {
	    url : "/home",
	    templateUrl : "home.html"
	}).state('mail', {
	    url : "/mail",
	    templateUrl : "mail/mail.html"
	})
})