$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

$('p').text().split('')
		.forEach(function(word) {
		var span = $("<span></span>").text(word); 
		$( "p" ).append(span)
	})

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

  var changeColor = function() {
	  setTimeout(function() {
	  	var color = colors[Math.floor(Math.random() * colors.length)]
	  	$('span').css("color", color)
	  	console.log(color)
	  	changeColor()
	  }, 1000)
	}

	changeColor();


});