// Javascript section 
// Toady's Date and Time through Moment.js
var currentDay = moment().format("dddd, MMMM Do YYYY");

// Global Variables
var hourArr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeChange;

// color code based on the time that it is 
var colorChange = function() {
    $.each(hourArr, function(index, hour) {
        var minutesChange = moment().diff(moment().hour(hour).minutes(0), 'minutes');
        if (minutesChange < 0) {
            $("." + hour + ".event").addClass("future");
        } else if (minutesChange > 59) {
            $("." + hour + ".event").removeClass("present");
            $("." + hour + ".event").addClass("past");
        } else {
            $("." + hour + ".event").removeClass("future");
            $("." + hour + ".event").addClass("present");
        }
    });
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



