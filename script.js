// Javascript section 
// Toady's Date and Time through Moment.js
var displayTime = document.querySelector("#currentDay");
var currentTime = moment();
displayTime.textContent = currentTime.format("dddd MMMM Do HH:mm A");

// converting all the hours as variables to the rows id  
// Ask BCS helped with converting the hours to military time for the second number and helping with the console.log under the current hour
var hour1 = 8;
var hour2 = 9;
var hour3 = 10;
var hour4 = 11;
var hour5 = 12;
var hour6 = 13;
var hour7 = 14;
var hour8 = 15;
var hour9 = 16;
var hour10 = 17;

var currentHour = moment().hour();
console.log(currentHour)

// Color changing per hour
if (currentHour < hour1) {
    $("#textEntry1").addClass("future");
} else if (currentHour > hour1) {
    $("#textEntry1").addClass("past");
} else if (currentHour = hour1) {
    $("#textEntry1").addClass("present");
}

if (currentHour < hour2) {
    $("#textEntry2").addClass("future");
} else if (currentHour > hour2) {
    $("#textEntry2").addClass("past");
} else if (currentHour = hour2) {
    $("#textEntry2").addClass("present");
}

if (currentHour < hour3) {
    $("#textEntry3").addClass("future");
} else if (currentHour > hour3) {
    $("#textEntry3").addClass("past");
} else if (currentHour = hour3) {
    $("#textEntry3").addClass("present");
}

if (currentHour < hour4) {
    $("#textEntry4").addClass("future");
} else if (currentHour > hour4) {
    $("#textEntry4").addClass("past");
} else if (currentHour = hour4) {
    $("#textEntry4").addClass("present");
}

if (currentHour < hour5) {
    $("#textEntry5").addClass("future");
} else if (currentHour > hour5) {
    $("#textEntry5").addClass("past");
} else if (currentHour = hour5) {
    $("#textEntry5").addClass("present");
}

if (currentHour < hour6) {
    $("#textEntry6").addClass("future");
} else if (currentHour > hour6) {
    $("#textEntry6").addClass("past");
} else if (currentHour = hour6) {
    $("#textEntry6").addClass("present");
}

if (currentHour < hour7) {
    $("#textEntry7").addClass("future");
} else if (currentHour > hour7) {
    $("#textEntry7").addClass("past");
} else if (currentHour = hour7) {
    $("#textEntry7").addClass("present");
}

if (currentHour < hour8) {
    $("#textEntry8").addClass("future");
} else if (currentHour > hour8) {
    $("#textEntry8").addClass("past");
} else if (currentHour = hour8) {
    $("#textEntry8").addClass("present");
}

if (currentHour < hour9) {
    $("#textEntry9").addClass("future");
} else if (currentHour > hour9) {
    $("#textEntry9").addClass("past");
} else if (currentHour = hour9) {
    $("#textEntry9").addClass("present");
}

if (currentHour < hour10) {
    $("#textEntry10").addClass("future");
} else if (currentHour > hour10) {
    $("#textEntry10").addClass("past");
} else if (currentHour = hour10) {
    $("#textEntry10").addClass("present");
}
// The text is still there when the page is refreshed
$('#textEntry1').val(localStorage.getItem('hour1'));
$('#textEntry2').val(localStorage.getItem('hour2'));
$('#textEntry3').val(localStorage.getItem('hour3'));
$('#textEntry4').val(localStorage.getItem('hour4'));
$('#textEntry5').val(localStorage.getItem('hour5'));
$('#textEntry6').val(localStorage.getItem('hour6'));
$('#textEntry7').val(localStorage.getItem('hour7'));
$('#textEntry8').val(localStorage.getItem('hour8'));
$('#textEntry9').val(localStorage.getItem('hour9'));
$('#textEntry10').val(localStorage.getItem('hour10'));

// Local Storage for the save button to work properly
// AskBCS

$('#saveBtn8').on('click', function () { // when the save button is clicked it goes to the function
    var value = $('#textEntry1').val(); // it gets the value form the text area section for text area 1 for this part
    localStorage.hour1 = value; // it then goes into the storage and saved as the value for this part and has to connect with the part above it 
});

$('#saveBtn9').on('click', function () { // when the save button is clicked it goes to the function
    var value = $('#textEntry2').val(); // it gets the value form the text area section for text area 1 for this part
    localStorage.hour2 = value; // it then goes into the storage and saved as the value for this part and has to connect with the part above it 
});

$('#saveBtn10').on('click', function () { // when the save button is clicked it goes to the function
    var value = $('#textEntry3').val(); // it gets the value form the text area section for text area 1 for this part
    localStorage.hour3 = value; // it then goes into the storage and saved as the value for this part and has to connect with the part above it 
});

$('#saveBtn11').on('click', function () { // when the save button is clicked it goes to the function
    var value = $('#textEntry4').val(); // it gets the value form the text area section for text area 1 for this part
    localStorage.hour4 = value; // it then goes into the storage and saved as the value for this part and has to connect with the part above it 
});

$('#saveBtn12').on('click', function () { // when the save button is clicked it goes to the function
    var value = $('#textEntry5').val(); // it gets the value form the text area section for text area 1 for this part
    localStorage.hour5 = value; // it then goes into the storage and saved as the value for this part and has to connect with the part above it 
});

$('#saveBtn13').on('click', function () { // when the save button is clicked it goes to the function
    var value = $('#textEntry6').val(); // it gets the value form the text area section for text area 1 for this part
    localStorage.hour6 = value; // it then goes into the storage and saved as the value for this part and has to connect with the part above it 
});

$('#saveBtn14').on('click', function () { // when the save button is clicked it goes to the function
    var value = $('#textEntry7').val(); // it gets the value form the text area section for text area 1 for this part
    localStorage.hour7 = value; // it then goes into the storage and saved as the value for this part and has to connect with the part above it 
});

$('#saveBtn15').on('click', function () { // when the save button is clicked it goes to the function
    var value = $('#textEntry8').val(); // it gets the value form the text area section for text area 1 for this part
    localStorage.hour8 = value; // it then goes into the storage and saved as the value for this part and has to connect with the part above it 
});

$('#saveBtn16').on('click', function () { // when the save button is clicked it goes to the function
    var value = $('#textEntry9').val(); // it gets the value form the text area section for text area 1 for this part
    localStorage.hour9 = value; // it then goes into the storage and saved as the value for this part and has to connect with the part above it 
});

$('#saveBtn17').on('click', function () { // when the save button is clicked it goes to the function
    var value = $('#textEntry10').val(); // it gets the value form the text area section for text area 1 for this part
    localStorage.hour10 = value; // it then goes into the storage and saved as the value for this part and has to connect with the part above it 
});



