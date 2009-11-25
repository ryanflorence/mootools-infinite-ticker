window.addEvent('load',function(){

	ticker_up = new InfiniteTicker('ticker_up',{
		duration: 1000,
		transition: 'quad:out',
		direction: 'up'
	}).startLoop();
	
	ticker_down = new InfiniteTicker('ticker_down',{
		duration: 1000,
		transition: 'quad:out',
		direction: 'down'
	}).startLoop();
	
	$('start').addEvent('click',function(){
		ticker_up.startLoop();
		ticker_down.startLoop();
	});
	
	$('stop').addEvent('click',function(){
		ticker_up.stopLoop();
		ticker_down.stopLoop();
	});
	
	$('next').addEvent('click',function(){
		ticker_up.toNext();
		ticker_down.toNext();
	});
	
});