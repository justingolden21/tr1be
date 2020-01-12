//todo

$(function() {

	// $('#we-are').hide().fadeIn(2000);

	$('#top-logo').css('opacity', 0);
	$('#slogan').css('opacity', 0);

	$('#we-are').css('opacity', 0).animate({
		opacity: 1,

	}, 1500, ()=> {
		$('#top-logo').animate({
			opacity: 1,

		}, 1500, ()=> {
			$('#slogan').animate({
				opacity: 1,

			}, 1500);
		});
	});

	new fullpage('#fullpage', {
		sectionsColor: ['#ecd317', '#cab209', '#ad960e', '#ecd317', '#cab209'],
		navigation: true,
		navigationTooltips: ['Home', 'Mission', 'Events', 'Team', 'Contact'],
	});




});
