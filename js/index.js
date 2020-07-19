// Ajax contact form

function _ (id) {
  return document.getElementById(id);
}

function submitForm(){
	_("submit").disabled = true;
	var formdata = new FormData();
	formdata.append( "name", _("name").value );
	formdata.append( "email", _("email").value );
  formdata.append( "subject2", _("subject2").value );
	formdata.append( "message", _("message").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "contactform.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				//_("form").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("submit").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}

// Navigation

const navburger = document.querySelector('.burger-menu');
const fullnav = document.querySelector('.full-nav');
const closebutton2 = document.getElementById('closeNav');

navburger.addEventListener('click', openNav);
closebutton2.addEventListener('click', closeNav);

function openNav() {
  fullnav.style.display = 'block';
  navburger.style.display = 'none';
}
function closeNav() {
  fullnav.style.display = 'none';
  navburger.style.display = 'block';
}

// Beratung-Smooth-scroll

$(function() {
  $('a[href^="#"]').stop().click(function() {
     if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
       var UD_HASH = this.hash;
       var UD_ZIEL = $(this.hash);
       if(UD_ZIEL.length) {
         var UD_ABSTAND_TOP = UD_ZIEL.offset().top;

         $('html, body').animate({scrollTop: UD_ABSTAND_TOP},600,function(){
            window.location.hash = UD_HASH;
         });
         return false;
       }

     }
  });
});
