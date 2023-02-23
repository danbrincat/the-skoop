document.write('\
	<a onclick="window.open(&#8216;https://www.facebook.com/sharer/sharer.php?u=&#8217;+pageUrl)"><span class="fab fa-facebook-f social-bttn" style="color:#2274b9"></span></a>\
	<a onclick="window.open(&#8216;https://twitter.com/intent/tweet?text=&#8217;+pageHeader+pageUrl+pageBanner)"><span class="fab fa-twitter social-bttn" style="color:#4d9ed8"></span></a>\
	<a onclick="window.open(&#8216;http://pinterest.com/pin/create/button/?url=&#8217;+pageUrl+&#8216;&media=&#8217;+pageBanner+"&description="")"><span class="fab fa-pinterest-p social-bttn" style="color:#e60019"></span></a>\
	<a onclick="window.open(&#8216;mailto:?subject="+pageHeader+&#8216;&body=&#8217;+pageUrl)"><span class="far fa-envelope social-bttn" style="color:#000"></span></a>\
	<a onclick="copyLink()"><span class="fas fa-link social-bttn" style="color:#0f65ef"></span></a>\
');