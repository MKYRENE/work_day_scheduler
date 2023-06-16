$(function () {
  // Adding an event listener for click events on the save button
  $(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val(); // Get the description text
    var timeBlockId = $(this).parent().attr("id"); // Get the time block id
    localStorage.setItem(timeBlockId, description); // Save the description in local storage using the time block id as the key
  });

  // Applying the past, present, or future class to each time block
  function updateTimeBlocks() {
    var currentHour = dayjs().hour(); // Get the current hour in 24-hour format
    console.log(currentHour)
    $(".time-block").each(function () {
      var blockTime = $(this).attr("id");
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]); // Extract the hour from the time block id
      var description = localStorage.getItem(blockTime);

      if (description) {
        $(this).find(".description").val(description);
      }
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour == currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  updateTimeBlocks(); // Call the function to apply the initial class

  // Display the current date in the header of the page
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});