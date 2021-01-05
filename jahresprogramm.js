"use strict";
var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
var n = new Date();
var y = n.getFullYear();
var m = n.getMonth();
document.getElementById("date").innerHTML = months[m] + " " + y;