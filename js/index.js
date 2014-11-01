// your custom functions here -- they do not need to be
// in the jQuery document ready() function.
// code to be used later at some point in life
// function myCustomFunction () {
//     console.log('You just called the myCustomFunction() function.');
// }

/*

this is how you use jquery's .ready() function. 
this function is used to safely execute Javascript
after the page has loaded and is ready to go.

you always use it in this manner:
*/

// protects us, so that our page loads before we add the JS
// when things are more complicated, it will slow down the page
// code to be executed when the page loads 

function runWeatherApp(){
    // get the Celsius temp from the input and conver to parseFloat
    // convert the Celsius to Farhenheit
    // put the farhenheit temp into the farhenheit input
    // change background based on temp
    var celsius = $('#celsiusInput').val();
    
    // convert celsius to a number
    celsius = parseFloat(celsius);
    
    // convert celsius to farhenheit
    var farhenheit = (celsius * 9 / 5) + 32;
    
    // put farhenheit temp into the proper input
    $('#farhenheitInput').val(farhenheit);

    console.log('celsius', celsius);
    console.log('farhenheit', farhenheit);


    if (farhenheit > 75) {
        $('body').css('backgroundColor', 'yellow');
    }
    else if (farhenheit > 60) {
        $('body').css('backgroundColor', 'pink');
    }
    else {
        $('body').css('backgroundColor', 'lightBlue');
    }
}


// your code that gets executed when the page is ready
// goes in this location
$(document).ready(function () {
    // attach click function to convert button
    $('#convertBtn').click( runWeatherApp );

    console.log('The page is ready for Javascript!');

});


// this dumps some text into the developer tools