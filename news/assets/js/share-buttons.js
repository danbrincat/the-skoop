document.write('\
	<p>Share:</p>\
	<a onclick="window.open("https://www.facebook.com/sharer/sharer.php?u="+pageUrl")"><span class="fab fa-facebook-f social-bttn" style="color:#2274b9"></span></a>\
	<a onclick="window.open("https://twitter.com/intent/tweet?text="+pageHeader+pageUrl+pageBanner)"><span class="fab fa-twitter social-bttn" style="color:#4d9ed8"></span></a>\
	<a onclick="window.open("http://pinterest.com/pin/create/button/?url="+pageUrl+"&media="+pageBanner+"&description="")"><span class="fab fa-pinterest-p social-bttn" style="color:#e60019"></span></a>\
	<a onclick="window.open("mailto:?subject="+pageHeader+"&body="+pageUrl)"><span class="far fa-envelope social-bttn" style="color:#000"></span></a>\
	<a onclick="copyLink()"><span class="fas fa-link social-bttn" style="color:#0f65ef"></span></a>\
');