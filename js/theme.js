var birdAlert = new BirdAlert({
	zIndex: 1200
});

$('.btn-success').on('click', function () {
	birdAlert.notify({
		msg: 'Scelerisque in tortor dapibus sed non habitasse dis, nec facilisis eros nec mattis integer.', 
		title: 'Success', 
		className: 'success'
	});
});

$('.btn-danger').on('click', function () {
	birdAlert.notify({
		msg: 'Scelerisque in tortor dapibus sed non habitasse dis, nec facilisis eros nec mattis integer.', 
		title: 'Success', 
		className: 'error'
	});
});

$('.btn-warning').on('click', function () {
	birdAlert.notify({
		msg: 'Scelerisque in tortor dapibus sed non habitasse dis, nec facilisis eros nec mattis integer.', 
		title: 'Success', 
		className: 'warning'
	});
});

$('.btn-info').on('click', function () {
	birdAlert.notify({
		msg: 'Scelerisque in tortor dapibus sed non habitasse dis, nec facilisis eros nec mattis integer.', 
		title: 'Success', 
		className: 'info'
	});
});