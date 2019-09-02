// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("create form");
  
      var newBurger = {
        name: $("#burger").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("Your order is ready", newBurger);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $(".eat").on("click", function(event) {
      var id = $(this).data("id");
  
      console.log(id);
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(function() {
        console.log("changed burger to", devoured);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });