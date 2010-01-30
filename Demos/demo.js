window.addEvent('domready',function(){

	// constructed instances

	var tickerUp = new InfiniteTicker('ticker_up',{
		duration: 1000,
		transition: 'quad:out',
		direction: 'up'
	});
	
	var tickerDown = new InfiniteTicker('ticker_down',{
		duration: 1000,
		transition: 'bounce:out',
		direction: 'down'		
	});
	
	var tickerRight = new InfiniteTicker('ticker_right',{
		duration: 1000,
		transition: 'quad:out',
		direction: 'right',
		childSelector: 'div.inner > p'
	});
	
	var tickerLeft = new InfiniteTicker('ticker_left',{
		duration: 1000,
		transition: 'quad:out',
		direction: 'left',
		transition: 'elastic:out'
	});


	// events inherited from Fx
	
	tickerUp.addEvents({
		onStart: function(){
			$('onStart').highlight();
		},
		onComplete: function(){
			$('onComplete').highlight();
		}
	})

	// methods

	$('start').addEvent('click',function(){
		tickerUp.startLoop();
		tickerDown.startLoop();
		tickerRight.startLoop();
		tickerLeft.startLoop();
	});
	
	$('stop').addEvent('click',function(){
		tickerUp.stopLoop();
		tickerDown.stopLoop();
		tickerLeft.stopLoop();
		tickerRight.stopLoop();
	});
	
	$('next').addEvent('click',function(){
		tickerUp.progress();
		tickerDown.progress();
		tickerRight.progress();
		tickerLeft.progress();
	});
	
	$('reverse').addEvent('click',function(){
		tickerUp.reverse();
		tickerDown.reverse();
		tickerRight.reverse();
		tickerLeft.reverse();
	});
	
	$('show_scrollbars').addEvent('click',function(){
		if(this.get('text') == 'show scrollbars'){
			$$('.ticker').setStyle('overflow','auto');
			this.set('text','hide scrollbars');
		} else {
			$$('.ticker').setStyle('overflow','hidden');
			this.set('text','show scrollbars');
		}
	})
	
});