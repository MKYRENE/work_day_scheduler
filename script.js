
  
 $(function () {
    // Adding an event listener for click events on the save button
    $(".saveBtn").on("click", function () {
      var description = $(this).siblings(".description").val(); // Get the description text
      var timeBlockId = $(this).parent().attr("id"); // Get the time block id
      localStorage.setItem(timeBlockId, description); // Save the description in local storage using the time block id as the key
    });
  
    // Applying the past, present, or future class to each time block
    function updateTimeBlocks() {
      var currentHour = dayjs().format("H"); // Get the current hour in 24-hour format
      $(".time-block").each(function () {
        var timeBlockHour = parseInt($(this).attr("id").split("-")[1]); // Extract the hour from the time block id
        if (timeBlockHour < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (timeBlockHour == currentHour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
  
    updateTimeBlocks(); // Call the function to apply the initial class
  
    // Get user input from localStorage and set the values of corresponding textarea elements
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var description = localStorage.getItem(timeBlockId);
      if (description) {
        $(this).find(".description").val(description);
      }
    });
  
    // Display the current date in the header of the page
    var currentDate = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDate);
  });
  



  

