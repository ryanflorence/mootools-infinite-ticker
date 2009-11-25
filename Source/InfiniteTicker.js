var InfiniteTicker = new Class({
	
	Extends: Fx.Scroll,
	Implements: Loop,
	
		options: {
			delay: 4000,
			direction: 'down'
		},
	
	initialize: function(element, options){
		this.parent(element,options);
		this.setLoop(this.toNext, this.options.delay);
		
		this.elements = this.element.getChildren();
		
		this.elementsHeight = this.elements[0].getSize().y;
		this.scrollHeight = this.element.getScrollSize().y;
		this.elementHeight = this.element.getStyle('height').toInt();
		this.scrollOffset = ((this.elementHeight / this.elementsHeight) + 1) * this.elementsHeight;
		
		this.moveElement(this.options.direction);
				
		this.addEvent('onComplete',function(){
			this.moveElement();
		}.bind(this));
		
	},
	
	toNext: function(){
		this.checkLooping();
		switch(this.options.direction){
			case 'down':
				this.start(0,this.element.getScroll().y - this.elementsHeight);
			break;
			case 'up':
				this.start(0,this.element.getScroll().y + this.elementsHeight);
			break;
		}
		
	},
	
	checkLooping: function(){
		if(this.isLooping) this.stopLoop().startLoop();
	},
	
	moveElement: function(target){
		switch(this.options.direction){
			case 'up':
				this.element.getFirst().dispose().inject(this.element, 'bottom');
			break;
			case 'down':
				this.element.getLast().dispose().inject(this.element, 'top');
			break;
		};
		this.set(0,this.scrollHeight - this.scrollOffset)
	}
	
});