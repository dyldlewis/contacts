//business logic
function Contact(first, last, address, email) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.addresses = [];
};

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", "+ this.state;
};

// user interface logic
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                               '<div class="form-group">' +
                                 '<label for="new-street">Street</label>' +
                                 '<input type="text" class="form-control new-street">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-city">City</label>' +
                                 '<input type="text" class="form-control new-city">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-state">State</label>' +
                                 '<input type="text" class="form-control new-state">' +
                               '</div>' +
                             '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();


    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedEmail = $("input#new-email").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmail);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(inputtedAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");



    $(".contact").last().click(function() {
      $("#show-contact").fadeIn();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".email").text(newContact.email);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input#new-email").val("");

  });
});
