/* jQuery and JavaScript code here for lab6-1.html */
window.addEventListener('load', () => {
  $("#pageTitle").text('Lab 6 – DOM Manipulation with jQuery');

  $('#msgArea').val('My class is ' + $('#msgArea').attr('class'));

  $('button:contains("View details")').css('background-color', 'red');

  $('body').css('background-color', 'ivory');

  $('.center-icons').each((index, element) => {
    $(element).addClass('selected');
  });

  $('.panel').on('click', () => {
    $('span#message').text("You clicked in this panel");
  });

  $('.panel').on('mousemove', (event) =>{
    $('span#message').text("x =" + event.pageX + " y =" + event.pageY);
  });

  $('.panel').on('mouseleave', () => {
    $('span#message').text("The mouse has left.");
  });

  console.log($('#stories img'))
  $('#stories img').each((index, element) => {
    $(element).on('mouseover', (event) => {
      var alt = $(element).attr('alt'); 
      var src = $(element).attr('src');         
      var newsrc = src.replace("small","medium");

      $('body').append('<div id=\"preview\"><img src=\"' + newsrc + '\"/><p>' + alt + '</p></div>');
      $('#preview').css('position', 'absolute');
      $('#preview').css('left', event.pageX);
      $('#preview').css('top', event.pageY);
      $('#preview').fadeIn();
      
      $(element).addClass('gray');
    });

    $(element).on('mouseleave', (event) => {
      $('#preview').fadeOut();
      $('#preview').remove()
      $(element).removeClass('gray');
    })
  });
});