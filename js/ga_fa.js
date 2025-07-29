function loadGA() {
	const script = document.createElement('script');
	script.setAttribute('async', '');
	script.src = 'https://www.googletagmanager.com/gtag/js?id=G-MWJX8WCGVQ';
	document.head.appendChild(script);

	window.dataLayer = window.dataLayer || [];
	function gtag() { dataLayer.push(arguments); }
	window.gtag = gtag;
	gtag('js', new Date());
	gtag('config', 'G-MWJX8WCGVQ');
}
function acceptCookies() {
	localStorage.setItem('ga-consent', 'true');
	loadGA();
	document.getElementById('cookie-banner').style.display = 'none';
}
function declineCookies() {
	localStorage.setItem('ga-consent', 'false');
	document.getElementById('cookie-banner').style.display = 'none';
}

export {loadGA, acceptCookies, declineCookies};
