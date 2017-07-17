// Business Logic -->

// This is a constructor of type Contact
function Contact (first, last) {
  this.firstName = first;
  this.lastName = last;
}

//This is a prototype named .fullName to be called upon a Contact object that's created from the Contact constructor, and returns the Contact's firstName and lastName concatenated together.
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


$(document).ready(function() {
  $("form#new-contact").submit(function(event){
    event.preventDefault();

// User Inputted Data -->
    var inputtedFirstName = $("#new-first-name").val();
    var inputtedLastName = $("#new-last-name").val();


// Create a new object/instance from the Contact constructor above
    var newContact = new Contact(inputtedFirstName, inputtedLastName);


// Targetting contacts id of the ul element and appending the fullName property of the newContact
// object which is being wrapped in a span class and an li
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

//.contact refers to the span class 'contact' created above. By adding ".last" to the click function, the list will only display the most recently inserted contact; otherwise, every element with the contact class would show.

    $(".contact").last().click(function() {
      $("#show-contact").show();
//This will target h2 to add the contact's first name.
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    //Ask John why this was here in the lesson
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
