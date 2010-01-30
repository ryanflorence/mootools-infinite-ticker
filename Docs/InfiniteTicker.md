Class: InfiniteTicker {#InfiniteTicker}
=======================================

<big>Scrolls an element with overflow infinitely by moving elements scrolled out of view back onto the other side of the element, to be scrolled back in to view later.</big>

### Demo

<iframe src="http://mootools.net/shell/rpflo/qFu99/embedded/result,js,html,css" style="width: 100%; height:430px"></iframe>

### Extends:

[Fx.Scroll][Fx.Scroll]

### Implements:

[Loop][Loop]: view to see inherited methods.

### Notes:

* Just like any [`Fx.Scroll`][Fx.Scroll] effect, your element must have an overflow.
* Inherits all of [`Loop`s][Loop] methods to start and stop.


InfiniteTicker Method: constructor {#InfiniteTicker:constructor}
-----------------------------------------------------------------

### Syntax:

	var myInfiniteTicker = new InfiniteTicker(element, options);

### Arguments:

1. element - (`element`) A string referencing the id of an element, or an element object.
2. options - (`object`) The [`Fx.Scroll`][Fx.Scroll] options object plus the following:

### Options:

* delay - (_number_: defaults to 4000) The time between scrolls.
* direction - (_string_: defaults to `up`) The direction to scroll.  Accepts `up`, `down`, `left`, or `right`.  (It actually scrolls the element the opposite direction.)
* autostart - (_boolean_: deafults to `true`) If true, will start progressing.
* childSelector - (_string_: defaults to `false`) A CSS selector to select the elements that determine the amount of scrolling per progression.
  * When left `false`, the children elements will be elected for `up` and `down`, and the grandchildren will be selected for `left` and `right` as you typically need an outer element to create a horizontal overflow.
  * When set, it will get the matched elements.

### Example:

    var myTicker = new InfiniteTicker('ticker',{
    	duration: 1000,
    	transition: 'quad:out',
    	direction: 'down'
    });


InfiniteTicker Method: progress {#InfiniteTicker:progress}
-----------------------------------------------------------

<big>Progresses the effect one increment</big>

### Syntax:

    myTicker.progress();
    myTicker.toNext(); // backwards compatibility

### Returns

This InfiniteTicker instance

InfiniteTicker Method: reverse {#InfiniteTicker:reverse}
---------------------------------------------------------

<big>Not very easy on the eyes, but allows you to reverse the direction of the effect. Might make this prettier in the future but it works.</big>

### Syntax:

    myTicker.reverse();

### Returns:

This InfiniteTicker instance

[Fx.Scroll]:http://mootools.net/docs/more/Fx/Fx.Scroll
[Loop]:http://mootools.net/forge/p/loop