const cart = [];

// One callback inside another inside functions - callback hell - pyramid of doom
AudioParam.createOrder(cart, function () {
	AudioParam.processOrder(function () {
		AudioParam.showOrderSummary(function () {
			updatewallet();
		});
	});
});
