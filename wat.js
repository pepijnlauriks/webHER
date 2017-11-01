console.log("hello");


$('.tab-list').each(function () {
    var $this = $(this);
    var $tab = $this.find('li.active');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));

    $this.on('click', '.tab-control', function (e) {
	    e.preventDefault();
	    var $link = $(this);
	    var id = this.hash;

	    if (id && !$link.is('active')) {
		    $panel.removeClass('active');
		    $tab.removeClass('active');

		    $panel = $(id).addClass('active');
		    $tab = $link.parent().addClass('active');
	    }
    });
});
$('.accordion').on('click', '.accordion-control', function (e) { // When clicked
	e.preventDefault(); // Prevent default action of button
	$(this) // Get the element the user clicked on
		.next('.accordion-panel') // Select following panel 
		.not(':animated') // If it is not currently animating
		.slideToggle(); // Use slide toggle to show or hide it
});

$(document).ready(function() {
  $(".trigger").click(function() {
    $(".menu").toggleClass("active"); 
  });
});