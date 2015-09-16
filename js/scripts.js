//Making a contact Object prototype
function Contact(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

//contaxct.prototype calls the function above then makes a new var
///called fullname and runs function to equal it?
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}

function resetFields() {
$("input#new-first-name").val("");
$("input#new-last-name").val("");
$("input.new-street").val("");
$("input.new-city").val("");
$("input.new-state").val("");
}

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

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        $(".new-address").each(function() {
            var inputtedStreet = $(this).find("input.new-street").val();
            var inputtedCity = $(this).find("input.new-city").val();
            var inputtedState = $(this).find("input.new-state").val();

            var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
            newContact.addresses.push(newAddress);
        });

        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);

            $("ul#address").text("");

            newContact.addresses.forEach(function(address) {
                $("ul#address").append("<li>" + address.fullAddress() + "</li>");
            });
        });

        resetFields();
    });
});
