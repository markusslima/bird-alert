var birdAlert = new BirdAlert({
	position: 'top right'
});

$('#btnBasic').on('click', function () {
	birdAlert.notify({
		msg: 'Basic mensage', 
		title: 'Success', 
		className: 'success'
	});
});

$('#btnNoTitle').on('click', function () {
	birdAlert.notify({
		msg: 'Basic mensage', 
		className: 'success'
	});
});

$('#btnLongMsg').on('click', function () {
	birdAlert.notify({
		msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum elementum eros in commodo. Vestibulum enim leo, laoreet vitae purus et, suscipit finibus orci. Praesent viverra nulla sed ipsum elementum, sit amet pellentesque lacus pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas', 
		title: 'Long Mensage', 
		className: 'info'
	});
});

/* OPTIONS */
$('#btnClickToHide').on('click', function () {
	birdAlert.set({
		clickToHide: false,
		onHide: function () {
			birdAlert.set({
				clickToHide: true
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et tincidunt tincidunt. Dictumst dignissim, mauris et tincidunt', 
		title: 'Click to hide false', 
		className: 'info'
	});
});

$('#btnCloseButton').on('click', function () {
	birdAlert.set({
		closeButton: false,
		onHide: function () {
			birdAlert.set({
				closeButton: true
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et tincidunt tincidunt. Dictumst dignissim, mauris et tincidunt', 
		title: 'Close button false', 
		className: 'warning'
	});
});
$('#btnAutoHide').on('click', function () {
	birdAlert.set({
		autoHide: false,
		onHide: function () {
			birdAlert.set({
				autoHide: true
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et', 
		title: 'Auto hide false', 
		className: 'info'
	});
});

$('#btnDuration').on('click', function () {
	birdAlert.set({
		duration: 1000,
		onHide: function () {
			birdAlert.set({
				duration: 5000
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et', 
		title: 'Duration 1000 Miliseconds', 
		className: 'success'
	});
});

$('#btnShowAnimation').on('click', function () {
	birdAlert.set({
		showAnimation: 'fadeIn',
		hideAnimation: 'fadeOut',
		onHide: function () {
			birdAlert.set({
				showAnimation: 'flipInX',
				hideAnimation: 'flipOutX'
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et', 
		title: 'Show and hide animation fadeIn, fadeOut', 
		className: 'success'
	});
});

$('#btnInverseInsert').on('click', function () {
	birdAlert.set({
		inverseInsert: true,
		onHide: function () {
			birdAlert.set({
				inverseInsert: false
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et', 
		title: 'InverseInsert true', 
		className: 'error'
	});
});

$('#btnPreventDuplicate').on('click', function () {
	birdAlert.set({
		preventDuplicate: true,
		onHide: function () {
			birdAlert.set({
				preventDuplicate: false
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et dignissim.', 
		title: 'PreventDuplicate true', 
		className: 'error'
	});
});

$('#btnTopLeft').on('click', function () {
	birdAlert.set({
		position: 'top left',
		onHide: function () {
			birdAlert.set({
				position: 'top right'
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et dignissim.', 
		title: 'Position Top Left', 
		className: 'info'
	});
});

$('#btnTopCenter').on('click', function () {
	birdAlert.set({
		position: 'top center',
		onHide: function () {
			birdAlert.set({
				position: 'top right'
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et dignissim.', 
		title: 'Position Top Center', 
		className: 'info'
	});
});

$('#btnTopRight').on('click', function () {
	birdAlert.set({
		position: 'top right',
		onHide: function () {
			birdAlert.set({
				position: 'top right'
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et dignissim.', 
		title: 'Position Top Right', 
		className: 'info'
	});
});

$('#btnBottomLeft').on('click', function () {
	birdAlert.set({
		position: 'bottom left',
		onHide: function () {
			birdAlert.set({
				position: 'bottom left'
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et dignissim.', 
		title: 'Position Bottom Left', 
		className: 'info'
	});
});

$('#btnBottomCenter').on('click', function () {
	birdAlert.set({
		position: 'bottom center',
		onHide: function () {
			birdAlert.set({
				position: 'bottom center'
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et dignissim.', 
		title: 'Position Bottom Center', 
		className: 'info'
	});
});

$('#btnBottomRight').on('click', function () {
	birdAlert.set({
		position: 'bottom right',
		onHide: function () {
			birdAlert.set({
				position: 'bottom right'
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et dignissim.', 
		title: 'Position Bottom Right', 
		className: 'info'
	});
});

$('#btnQuantity').on('click', function () {
	birdAlert.set({
		quantity: 3,
		onHide: function () {
			birdAlert.set({
				quantity: 7
			});
		}
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et dignissim.', 
		title: 'Quantity agroup 3', 
		className: 'success'
	});
});


$('#btnAgroup').on('click', function () {
	birdAlert.set({
		agroup: false,
		onHide: function () {
			birdAlert.set({
				agroup: true
			});
		}
	});

	birdAlert.notify({
		msg: 'No agroup. Facilisis pellentesque dictumst dignissim, mauris et dignissim.', 
		title: 'Agroup false', 
		className: 'warning'
	});
});

$('#btnWidth').on('click', function () {
	birdAlert.set({
		width: 800,
		onHide: function () {
			birdAlert.set({
				width: 400
			});
		}
	});

	birdAlert.notify({
		msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum elementum eros in commodo. Vestibulum enim leo, laoreet vitae purus et, suscipit finibus orci. Praesent viverra nulla sed ipsum elementum, sit amet pellentesque lacus pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas', 
		title: 'Width 800', 
		className: 'info'
	});
});

$('#btnZindex').on('click', function () {

	$('.blockWindow').show();

	birdAlert.set({
		zIndex: 1200,
		onHide: function () {
			birdAlert.set({
				zIndex: 1000
			});
			$('.blockWindow').hide();
		}
	});

	birdAlert.notify({
		msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum elementum eros in commodo. Vestibulum enim leo, laoreet vitae purus et, suscipit finibus orci. Praesent viverra nulla sed ipsum elementum, sit amet pellentesque lacus pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas', 
		title: 'zIndex: 1200', 
		className: 'info'
	});
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
		clickToHide: false,
		inverseInsert: true
	});

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et tincidunt tincidunt. Dictumst dignissim, mauris et tincidunt', 
		title: 'Info', 
		className: 'info'
	});
});


$('#btnSetDefaults').on('click', function () {
	birdAlert.setDefaults();

	birdAlert.notify({
		msg: 'Facilisis pellentesque dictumst dignissim, mauris et tincidunt tincidunt. Dictumst dignissim, mauris et tincidunt', 
		title: 'Info', 
		className: 'info'
	});
});