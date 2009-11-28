window.addEvent('load',function(){

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
		childSelector: 'div.inner > p'
	});

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
		tickerUp.toNext();
		tickerDown.toNext();
		tickerRight.toNext();
		tickerLeft.toNext();
	});
	
	$('show_scrollbars').addEvent('click',function(){
		if(this.get('text') == 'show scrollbars'){
			$$('div.ticker').setStyle('overflow','auto');
			this.set('text','hide scrollbars');
		} else {
			$$('div.ticker').setStyle('overflow','hidden');
			this.set('text','show scrollbars');
		}
	})
	
});