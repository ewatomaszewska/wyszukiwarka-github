var $send = $('#send');
var $list = $('#lista');
var api = 'https://api.github.com/search/repositories?&sort=stars&order=desc&q=';
var listSize = 10;

var clickButton = function() {

  var textSearch = $('#searchValue').val();

    if(textSearch.length <= 3) {
      $list.html('<li>tekst za krótki</li>');
    }
    else {
      $list.empty();
        $.ajax({
          url: api + textSearch,
          method: 'GET',
          success:  listRepositories
        });
    }
};

var listRepositories = function(resp) {

    for (var i = 0; i < listSize; i++) {
      $list.append('<li>' + 
        '<img src="' + resp.items[i].owner.avatar_url + '" />' + 
        '<p class="userName">' + resp.items[i].name + '</p>'+ '<br/>' +
        '<p class="userFull">' +
        '<a href="' + resp.items[i].html_url + '">' + resp.items[i].full_name + '</a>' + 
        '</p>' + '</li>');
    }   
}
$send.click(clickButton);



//https://jsfiddle.net/ega8Lszs/3/
