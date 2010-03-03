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
			fixMargin: true
		},
	
	initialize: function(element, options){
		this.parent(element, options);
		this.cacheElements();
		if(this.options.fixMargin) this.checkMargins();
		this.moveElement();	
		
		this.setLoop(this.progress, this.options.delay);
		this.checkAutoStart();
		
		this.toNext = this.progress; // bc
		this.addEvent('onComplete',this.moveElement.bind(this));
	},
		
	cacheElements: function(){
		var cs = this.options.childSelector;
		if(cs){
			els = this.element.getElements(cs);
		} else if (this.options.direction == 'left' || this.options.direction == 'right'){
			els = this.element.getElements(':first-child > *');
		} else {
			els = this.element.getChildren();
		}
		this.elements = els;
		this.elementsSize = this.elements[0].getSize();
		this.scrollSize = this.element.getScrollSize();
		return this;
	},
	
	checkMargins: function(){
		this.elements.each(function(element){
			var margins = element.getStyle('margin');
			if (margins
				 .split(' ')
				 .map(function(item){return item.toInt();})
				 .join(' ') != '0 0 0 0'
			) {
				element.setStyles({
					'margin': 0
				});
				var nodes = $A(element.childNodes);
				var el = new Element('div', { styles: { 'margin': margins }}).inject(element);
				nodes.each(function(node){
					el.appendChild(node)
				});
			}
		}, this);
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
			case 'down': this.start(0, scroll.y - this.elementsSize.y); break;
			case 'up': this.start(0, scroll.y + this.elementsSize.y); break;
			case 'right': this.start(scroll.x - this.elementsSize.x, 0); break;
			case 'left': this.start(scroll.x + this.elementsSize.x, 0); break;
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
