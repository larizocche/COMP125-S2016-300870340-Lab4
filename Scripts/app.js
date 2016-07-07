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

  


  var User = {
      ID: "1",
      Name: "admin",
      Email: "admin@example.com",
      Password: "12345"

  };

    function init() {
        console.log("Application Started");
        console.log(User);
        console.log(User.Name);
    

    }

    

   




    // call init funciton when window finishes loading
    window.addEventListener("load", init);


})();