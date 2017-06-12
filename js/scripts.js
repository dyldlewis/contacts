//business logic
function Contact(first, last, address, email) {
  this.firstName = first;
  this.lastName = last;
  this.address = address;
  this.email = email;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedEmail = $("input#new-email").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress, inputtedEmail);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");


    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
      $(".email").text(newContact.email);
    });
  });
});
