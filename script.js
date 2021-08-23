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

        //Save text to the webpage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        // get the Current Time in hours
        var timeNow = moment().hour();

        //Make the blocks into one hour blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // Check time with help from AskBCS
            if (blockTime < timeNow) {
                $timeNow(this).removeClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
        })
    }


    // Local Storage
$("hour8 . description").val(localStorage.getItem("hour 8"));

})

