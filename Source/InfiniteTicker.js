/*
---

script: InfiniteTicker.js

description: Scrolls an element with overflow infinitely

license: MIT-style license.

authors: Ryan Florence <http://ryanflorence.com>

docs: http://moodocs.net/rpflo/mootools-rpflo/InfiniteTicker

requires:
- more/1.2.4.3: [Fx.Scroll]
- /Loop

provides: [InfiniteTicker]

...
*/

var InfiniteTicker = new Class({
	
	Extends: Fx.Scroll,
	Implements: Loop,
	
		options: {
			direction: 'down',
			childSelector: false,
			delay: 4000,
			autostart: true,
			autoCorrectSize: true
		},
	
	pad: 0, // for borders and margin
	
	initialize: function(element, options){
		this.parent(element, options);
		this.cacheElements();
		if(this.options.autoCorrectSize) this.correct('margin');
		this.toNext = this.progress; // bc

		this
			.moveElement()
			.setLoop(this.progress, this.options.delay)
			.checkAutoStart()
			.addEvent('onComplete', this.moveElement.bind(this));
	},
		
	cacheElements: function(){
		var cs = this.options.childSelector, els;
		if(cs){
			els = this.element.getElements(cs);
		} else if (this.options.direction == 'left' || this.options.direction == 'right'){
			els = this.element.getElement('*').getChildren();
		} else {
			els = this.element.getChildren();
		}
		this.elements = els;
		this.elementsSize = this.elements[0].getSize();
		this.scrollSize = this.element.getScrollSize();
		return this;
	},
	
	correct: function(prop){
		var d = this.options.direction;
		var props = this.elements[0]
			.getStyle(prop)
			.split(' ')
			.map(function(item){return item.toInt();});
		
		if(props.join(' ') != '0 0 0 0'){
			if(d == 'left' || d == 'right'){
				this.pad += (props[1] == 0) ? props[3] : props[1];
			} else {
				this.pad += (props[0] == 0) ? props[2] : props[0];
			};
		};
		return this;
	},
	
	checkAutoStart: function(){
		if(this.options.autostart) this.startLoop();
		return this;
	},
		
	reverse: function(){
		var r = {
			up: 'down',
			down: 'up',
			right: 'left',
			left: 'right'
		};
		this.options.direction = r[this.options.direction];
		this.moveElement();
		return this;
	},
	
	progress: function(){
		var scroll = this.element.getScroll();
		switch(this.options.direction){
			case 'down': this.start(0, scroll.y - this.elementsSize.y - this.pad); break;
			case 'up': this.start(0, scroll.y + this.elementsSize.y + this.pad); break;
			case 'right': this.start(scroll.x - this.elementsSize.x - this.pad, 0); break;
			case 'left': this.start(scroll.x + this.elementsSize.x + this.pad, 0); break;
		};
	},
	
	moveElement: function(){
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
