console.log('Hello Berlin!')

function goToPage(link){
//Goal: hide all the divs with data-page(jQuery) , except the right one

//Solution 1
// $('[data-page').hide();
// $('[data-page='+link+']').show();

//Solution 2
$('[data-page').each(function() {
  var page = $(this).data('page')
  if (page === link)
    $(this).show()
  else 
    $(this).hide()

  //console.log($(this).data('page'));

  //equals line above
  //console.log($(this).attr('data-page'));

  //BONUS Add class active in the navbar
  $('li.nav-item').each(function(){
    var href =  $(this).find('a.nav-link').attr('href')  
    console.log(href);
    if (href === link){
      $(this).addClass('active')
    else
      $(this).removeClass('active')
    }

  })
});
}

// go to main
goToPage('play')

// Listen for click events on <a>
//Hint: event.preventDefault

$('a').click(function(event){
event.preventDefault()
var href = $(this).attr('href')
goToPage(href)
})



