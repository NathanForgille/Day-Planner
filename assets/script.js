$(document).ready(function(){
    //Allow the user to provide 'tasks' and hit the save button so that the task is saved to local storage and persists through page refresh
    //bonus: add in 15 minute increments to each hour
    //bonus: add in two rows that are uneditable for coffee time only. this time is sacred.
    $(".saveBtn").on("click", function(){
        var task = $(this).siblings(".tasks").val();
        var time = $(this).parent().attr("id");
    //this is so that when the user enter their text into the box the time and the task are saved onto local storage so that information can be retrieved, or ("getItem").
        localStorage.setItem(time, task);
    });
    
    //this set of "localStorage.getItem" is how I retrieved my saved "key and values" within local storage
    $("#8 .tasks").val(localStorage.getItem("8"));
    $("#9 .tasks").val(localStorage.getItem("9"));
    $("#10 .tasks").val(localStorage.getItem("10"));
    $("#11 .tasks").val(localStorage.getItem("11"));
    $("#12 .tasks").val(localStorage.getItem("12"));
    $("#13 .tasks").val(localStorage.getItem("13"));
    $("#14 .tasks").val(localStorage.getItem("14"));
    $("#15 .tasks").val(localStorage.getItem("15"));
    $("#16 .tasks").val(localStorage.getItem("16"));
    $("#17 .tasks").val(localStorage.getItem("17"));
    
    function timeUpdate(){
        //I need to find and set the current hour
        var currentHour= moment().hours()
        console.log(currentHour);
        //I now need to create a loop so that I can set certain styling classes on the past, present, and future hour(s)
        $(".time-block").each(function(){
            var hourDone= parseInt($(this).attr("id"));
            console.log(hourDone);
            if (hourDone < currentHour){
                $(this).addClass("past");
            }
            else if (hourDone === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past")
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });    
    }
    timeUpdate();
    
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
    
    });