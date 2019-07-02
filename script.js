var restaurants = ["Chipotle", "Pei Wei", "Wegmans", "Cava Grill", "Chick Fil A", "Dominos", "Mod Pizza", "Potbelly", "Panera", "Pomodoro", "Moby Dick", "Five Guys", "Firehouse Subs", "PF Changs", "Elevation Burger", "Mezeh"];
var num1;
var response;
$(document).ready(function () {
    response = document.getElementById("response");
    num1 = Math.floor((Math.random() * (restaurants.length-1)));
    $("#button").click(function(){
        response.innerHTML = restaurants[num1];
        num1 = Math.round((Math.random() * (restaurants.length-1)));
    });
});