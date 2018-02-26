var birdAlert = new BirdAlert({
	position: 'top right'
});



$('#btnSuccess').on('click', function () {
	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et tincidunt tincidunt', 
		title: 'Success', 
		className: 'success'
	});
});

$('#btnError').on('click', function () {
	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et tincidunt tincidunt', 
		title: 'Error', 
		className: 'error'
	});
});

$('#btnWarning').on('click', function () {
	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et tincidunt tincidunt', 
		title: 'Warning', 
		className: 'warning'
	});
});
$('#btnInfo').on('click', function () {
	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et tincidunt tincidunt', 
		title: 'Info', 
		className: 'info'
	});
});
$('#btnSet').on('click', function () {
	birdAlert.set({
		position: 'bottom center',
		autoHide: false,
		clickToHide: false
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et tincidunt tincidunt. Dictumst dignissim, mauris et tincidunt', 
		title: 'Info', 
		className: 'info'
	});
});