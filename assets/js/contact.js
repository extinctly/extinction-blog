$(function(){
  $('#contact').urlModal();
});

var input;

var base = new Firebase('https://extinctly.firebaseio.com/');

function onSubmit() {
    var contact_email = $('#contact_email').val();
    var link1_url = $('#link1_url').val();
    var description_long = $('#description_long').val();
    var category = $('#category').val();
    var location = $('#location').val();
    var name = $('#name').val();
    base.push({contact_email: contact_email, link1_url: link1_url, description_long: description_long, category: category, location: location, name: name});
  };
