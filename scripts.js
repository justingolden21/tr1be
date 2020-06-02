$( ()=> {

	$('#top-logo').css('opacity', 0);
	$('#tribe').css('opacity', 0);
	$('#top-logo-coin').css('opacity', 0);
	$('#slogan').css('opacity', 0);
	$('#top-text').css('opacity', 0);
	$('#top-btns').css('opacity', 0);

	$('#we-are').css('opacity', 0).animate({
		opacity: 1,
	}, 1000, ()=> {
		$('#tribe').animate({
			opacity: 1,
		}, 1000);
		$('#top-logo-coin').animate({
			opacity: 1,
		}, 1000);
		$('#top-logo').animate({
			opacity: 1,
		}, 1000, ()=> {
			$('#slogan').animate({
				opacity: 1,
			}, 1000, ()=> {
				$('#top-text').animate({
					opacity: 1,
				}, 1000);
				$('#top-btns').animate({
					opacity: 1,
				}, 1000);
			});
		});
	});

	new fullpage('#fullpage', {
		navigation: true,
		navigationTooltips: ['Home', 'DKP', 'Sheets', 'Check us Out'],
		anchors: ['home', 'dkp', 'sheets', 'contact'],
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		onLeave: (origin, destination, direction) => {
			$('a').removeClass('active');
			$(`a[href="#${destination.anchor}"]`).addClass('active');
		}
	});

	// https://blog.discord.com/add-the-discord-widget-to-your-site-d45ffcd718c6

});
