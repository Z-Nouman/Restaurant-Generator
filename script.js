var restaurants = ["Chipotle", "Pei Wei", "Wegmans", "Cava Grill", "Chick Fil A", "Dominos", "Mod Pizza", "Potbelly", "Panera", "Pomodoro", "Moby Dick", "Five Guys", "Firehouse Subs", "PF Changs", "Elevation Burger", "Mezeh"];
var num1;
var response;
var again;
var i;
function removeElement(arr, value){
    var newRests = [];
    for (i=0; i < arr.length; i++){
        if (i == value){
            
        }
        else{
            newRests.push(arr[i]);
        }
    }
    return newRests;
}
$(document).ready(function () {
    response = document.getElementById("response");
    again = document.getElementById("Sad");
    num1 = Math.floor((Math.random() * (restaurants.length-1)));
    $("#button").click(function(){
        again.innerHTML = "Don't like the outcome? Press the button to get a different option!";
        if (restaurants.length == 0){
            response.innerHTML = "You ran out of choices, sorry.";
        }
        else{
            response.innerHTML = restaurants[num1];
            restaurants = removeElement(restaurants, num1);
            num1 = Math.ceil((Math.random() * (restaurants.length))) - 1;
            
        }
    });
});
