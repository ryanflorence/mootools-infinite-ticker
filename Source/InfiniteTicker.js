/*
---

script: InfiniteTicker.js

description: Scrolls an element with overflow infinitely

license: MIT-style license.

authors: Ryan Florence <http://ryanflorence.com>

docs: http://moodocs.net/rpflo/mootools-rpflo/InfiniteTicker

requires:
- /Fx.Scroll
- /Loop
- /Element

provides: [InfiniteTicker]

...
*/



var InfiniteTicker = new Class({
	
	Extends: Fx.Scroll,
	Implements: Loop,
	
		options: {
			delay: 4000,
			direction: 'down',
			childSelector: 'p'
		},
	
	initialize: function(element, options){
		this.parent(element,options);
		this.setLoop(this.toNext, this.options.delay);
		this.cacheElements();
		this.elementsSize = this.elements[0].getSize();
		this.scrollSize = this.element.getScrollSize();
		this.elementStyles = {
			height: this.element.getStyle('height').toInt(),
			width: this.element.getStyle('height').toInt()
		};
		this.scrollOffsets = {
			y: ((this.elementStyles.height / this.elementsSize.y) + 1) * this.elementsSize.y,
			x: ((this.elementStyles.x / this.elementsSize.x) + 1) * this.elementsSize.x
		};
		this.moveElement(this.options.direction);	
		this.addEvent('onComplete',function(){
			this.moveElement();
		}.bind(this));
		this.startLoop();
	},
	
	cacheElements: function(){
		this.elements = this.element.getElements(this.options.childSelector);
		return this;
	},
	
	toNext: function(){
		this.checkLooping();
		var scroll = this.element.getScroll();
		switch(this.options.direction){
			case 'down': this.start(0, scroll.y - this.elementsSize.y); break;
			case 'up': this.start(0, scroll.y + this.elementsSize.y); break;
			case 'right': this.start(scroll.x - this.elementsSize.x, 0); break;
			case 'left': this.start(scroll.x + this.elementsSize.x, 0); break;
		};
	},
	
	checkLooping: function(){
		if(this.isLooping) this.stopLoop().startLoop();
		return this;
	},
	
	moveElement: function(target){
		this.cacheElements();
		switch(this.options.direction){
			case 'down': 
				this.elements.getLast().dispose().inject(this.elements[0], 'before');
				this.set(0,this.scrollSize.y);
			break;
			case 'up':
				this.elements[0].dispose().inject(this.elements.getLast(), 'after');
				this.set(0,0);
			break;
			case 'right':
				this.elements.getLast().dispose().inject(this.elements[0], 'before');
				this.set(this.scrollSize.x,0);
			break;
			case 'left':
				this.elements[0].dispose().inject(this.elements.getLast(), 'after');
				this.set(0,0);
			break;
		};
		return this;
	}
	
});