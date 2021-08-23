// Javascript section 
// Toady's Date and Time

var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener
    $(".saveBtn").on("click", function () {
        // Get Values of the Description
        var text = $(this).siblings(".descrpition").val();
        var time = $(this).parent().attr("id");
    })
})