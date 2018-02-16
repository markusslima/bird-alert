var birdAlert = new BirdAlert({
	position: 'top right',
	agroup: false
});



$('#btnNotify').on('click', function () {
	birdAlert.notify({
		msg: 'Mensagem de alerta', 
		title: 'Success', 
		type: 'success'
	});
});

$('#btnNotifyError').on('click', function () {
	birdAlert.notify({
		msg: 'Mensagem de alerta', 
		title: 'Error', 
		type: 'error'
	});
});