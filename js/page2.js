// definir les variables
const cookies = document.getElementById('cookies');
const accepter = document.getElementById('accepter');
const refuser = document.getElementById('refuser');

// disparaitre les cookies
accepter.addEventListener('click', function(){
	cookies.setAttribute('style', 'display: none')
	alert('Merci !')
})

// persister par alert
refuser.addEventListener('click', function(){
	alert('Accepte les cookies !')
})

function scrollToTop(){
	window.scrollTo(0,0)
}