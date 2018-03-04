$(document).ready(function () {
	var menuHTML = '<nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg" role="navigation">'
				 + '	<div class="container">'
				 + '	  	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">'
				 + '	  	  	<span class="navbar-toggler-icon"></span>'
				 + '	  	</button>'
	  			 + '		<div class="collapse navbar-collapse" id="navbarTogglerDemo02">'
	  			 + '		  	<ul class="navbar-nav mr-auto mt-2 mt-lg-0">'
	  			 + '				<li class="nav-item dropdown">'
				 + '			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
				 + '			          	More plugins'
				 + '			        </a>'
				 + '			        <div class="dropdown-menu" aria-labelledby="navbarDropdown">'
				 + '			            <a class="dropdown-item" href="http://markusslima.github.io/bootstrap-filestyle/">Bootstrap FileStyle</a>'
				 + '					    <a class="dropdown-item" href="http://markusslima.github.io/easy-z-modal/">Easy-Z modal</a>'
				 + '			        </div>'
				 + '			    </li>'
				 + '				<li class="nav-item">'
				 + '					<a class="nav-link" href="./index.html">Get Start</a>'
				 + '				</li>'
				 + '				<li class="nav-item">'
				 + '					<a class="nav-link" href="./options.html">Options</a>'
				 + '				</li>'
				 + '				<li class="nav-item">'
				 + '					<a class="nav-link" href="./methods.html">Methods</a>'
				 + '				</li>'
				 + '				<li class="nav-item">'
				 + '					<a class="nav-link" href="./events.html">Events</a>'
				 + '				</li>'
				 + '				<li class="nav-item">'
				 + '					<a class="nav-link" href="./themes.html">Themes</a>'
				 + '				</li>'
				 + '				<li class="nav-item">'
				 + '					<a class="nav-link" href="./questions.html">Questions</a>'
				 + '				</li>'
	  			 + '		  	</ul>'
	  			 + '		</div>'
	  			 + '	</div>'
				 + '</nav>';

	$('body').prepend(menuHTML);

	var htmlFooter = '<div class="container">'
				   + '	<div class="row">'
				   + '		<div class="col text-center">'
				   + '			<p>:) Here to thank all the people who have contributed and will contribute to this project.</p>'
				   + '			<p> Copyright © <strong><a href="https://github.com/markusslima">Markus Lima</a></strong> <span id="ano"></span>. </p>'
				   + '		</div>'
				   + '	</div>'
				   + '</div>';
	$('footer').html(htmlFooter);


	var htmlHeader = '<h1 class="title">Bird Alert</h1>'+
				     '<h3 class="subtitle">Jquery plugin for displaying beautiful messages on your web system</h3>'+
				     '<div class="sky">'+
					 '  <div class="cloud normal"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud large"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud small"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud tiny"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud large"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud normal"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud small"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud tiny"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud small"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud normal"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud tiny"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud large"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud small"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud tiny"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div> '+
					 '  <div class="cloud large"> '+
					 '    <div></div><div></div><div></div><div></div> '+
					 '  </div>'+
					 '</div>'+
					 '<img src="img/bird-128x128.gif" class="bird">';
	$('header').html(htmlHeader);

	var d = new Date();
	$('#ano').html(d.getFullYear());

	$('.cloud').each(function () {
  		$(this).css('margin-left', Math.floor((Math.random() * 70) + 20)+'%');
	})
});