/**
 * FileName: app.js
 * 
 * @author Larissa Zocche
 * @date July 8, 2016
 * 
 * StudentID: 300870340
 * 
 * @description This file is a javascript file for the login form
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    //Class User
    var User = (function () {
        //constructor
        function User(username, password) {
            this._userName = username;
            this._password = password;
        }
        //Set Username
        User.prototype.SetUserName = function (username) {
            this._userName = username;
        };
        //Get Username
        User.prototype.GetUserName = function () {
            return this._userName;
        };
        //Set Password
        User.prototype.SetPassword = function (password) {
            this._password = password;
        };
        //Get Password
        User.prototype.GetPassword = function () {
            return this._password;
        };
        return User;
    } ());

    function init() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("pwd").value;

        var user = new User(username, password);

        console.log("Username: " + user._userName);
        console.log("Password: " + user._password);
    }

    var pwd = document.getElementById("pwd");

    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        init();
        contactForm.reset();
    });

})();

