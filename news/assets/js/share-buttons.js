document.write('\
	<a onclick="window.open(&#39;https://www.facebook.com/sharer/sharer.php?u=&#39;+pageUrl)"><span class="fab fa-facebook-f social-bttn" style="color:#2274b9"></span></a>\
	<a onclick="window.open(&#39;https://twitter.com/intent/tweet?text=&#39;+pageHeader+pageUrl+pageBanner)"><span class="fab fa-twitter social-bttn" style="color:#4d9ed8"></span></a>\
	<a onclick="window.open(&#39;http://pinterest.com/pin/create/button/?url=&#39;+pageUrl+&#39;&media=&#39;+pageBanner+&#39;&description=&#39;)"><span class="fab fa-pinterest-p social-bttn" style="color:#e60019"></span></a>\
	<a onclick="window.open(&#39;mailto:?subject="+pageHeader+&#39;&body=&#39;+pageUrl)"><span class="far fa-envelope social-bttn" style="color:#000"></span></a>\
	<a onclick="copyLink()"><span class="fas fa-link social-bttn" style="color:#0f65ef"></span></a>\
');