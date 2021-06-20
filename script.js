window.logout = async function() {
	await fetch('/~/HydrangeaHacks/logout', { method: 'POST'})
	location.href = '/~/HydrangeaHacks/index'
}

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}