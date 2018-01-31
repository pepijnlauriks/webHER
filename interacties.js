//sidebar
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
// rangeslider in zoekformulier
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();
//
//var mobileNav = document.getElementsByClassName('Mobilenav')[0];
//function mobileNav(){
//	console.log('hello');
//	mobileNav.classList.add('animate');
//}
//document.getElementsByClassName('Mobilenav-active')[0].addEventListener("click", mobileNav);


// mobiel menu
// bron: https://codepen.io/suez/pen/vAais?q=radial+menu&limit=all&type=type-pens
$(document).ready(function () {
	$(".Mobilenav-active").click(function () {
		$(".Mobilenav").toggleClass("animate");
	});
});

//download knop
// bron: https://codepen.io/andreasstorm/pen/GMgXRO?depth=everything&order=popularity&page=9&q=download&show_forks=false
var downloadButton = document.getElementsByClassName('downloadbutton')[0];
function downloadAnimation() {
	downloadButton.classList.add('load');
	setTimeout(function (){
		downloadButton.classList.add('done');
	}, 1000);
	setTimeout(function (){
		downloadButton.classList.remove('load done');
	}, 5000);
	
}
document.getElementsByClassName('downloadbutton')[0].addEventListener("click", downloadAnimation);


//like animatie
var heartLayerTwo = document.getElementsByClassName('heartlayer2')[0];
var plusEen = document.getElementsByClassName('heartplusone')[0];
var plusEenTablet = document.getElementsByClassName('heartplusoneT')[0];

function heartAnimation() {
	console.log("hello");
	heartLayerTwo.classList.add('heart-active');
	plusEen.classList.add('heartplusone-active');
	plusEenTablet.classList.add('heartplusoneT-active');
	setTimeout(function () {
		plusEen.classList.remove('heartplusone-active');
		plusEenTablet.classList.remove('heartplusoneT-active');
	}, 3000);
}

function AnimationEnded() {
	setTimeout(function () {
		heartLayerTwo.classList.remove('heart-active');
	}, 1000);

}
heartLayerTwo.addEventListener("animationend", AnimationEnded, false);

document.getElementsByClassName('heart')[0].addEventListener("click", heartAnimation);

// extra microinteractie
//var deel = document.getElementsByClassName('deel')[0];

//function deelAnimation() {
//	console.log("hello");
//	deel.classList.toggle('deel-active');
//}
//document.getElementsByClassName('deel')[0].addEventListener("click", deelAnimation);

// formulier js
var logIn = document.getElementById('button-login');
var meldAan = document.getElementById('button-aanmelden');
var logInForm = document.getElementById('login');
var meldAanForm = document.getElementById('aanmelden');

function login() {

	logIn.classList.add('form-showlogin');
	meldAan.classList.remove('form-showaanmeld');
	logInForm.classList.toggle('form-noshow');
	meldAanForm.classList.add('form-noshow');


}

function aanmeld() {
	logIn.classList.remove('form-showlogin');
	meldAan.classList.add('form-showaanmeld');
		meldAanForm.classList.toggle('form-noshow');
	logInForm.classList.add('form-noshow');
}

document.getElementById('button-login').addEventListener("click", login);
document.getElementById('button-aanmelden').addEventListener("click", aanmeld);