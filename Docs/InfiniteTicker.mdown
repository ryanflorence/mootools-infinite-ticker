Class: InfiniteTicker {#InfiniteTicker}
=======================================

<big>Scrolls an element with overflow infinitely by moving elements scrolled out of view back into the other side of the element to be scrolled back in to view later.</big>

### Demo

<iframe src="http://mooshell.net/rpflo/tAwde/embedded/?tabs=result,js,html,css" style="width: 100%; height:340px"></iframe>

### Extends:

[Fx.Scroll][2]

### Implements:

[Loop][loop]: view to see inherited methods.

### Notes:

* Just like any [`Fx.Scroll`][2] effect, your element must have an overflow.
* Inherits all of [`Loop`s][1] methods to start and stop.

InfiniteTicker Method: constructor {#InfiniteTicker:constructor}
-----------------------------------------------------------------

### Syntax:

	var myInfiniteTicker = new InfiniteTicker(element, options);

### Arguments:

1. element - (`element`) A string referencing the id of an element, or an element object.
2. options - (`object`) The [`Fx.Scroll`][2] options object plus the following:

### Options:

* delay - (_number_: defaults to 3000) The time between scrolls.
* direction - (_string_: defaults to `up`) The direction to scroll.  Accepts `up` or `down`.

### Example:

    var myTicker = new InfiniteTicker('ticker',{
    	duration: 1000,
    	transition: 'quad:out',
    	direction: 'down'
    }).startLoop();


InfiniteTicker Method: toNext {#InfiniteTicker:toNext}
-------------------------------------------------------

<big>Scroll the container one element forward.</big>

### Syntax:

    myTicker.toNext();


  [1]: http://moodocs.net/rpflo/mootools-rpflo/Loop "Loop"
  [2]: http://mootools.net/docs/more/Fx/Fx.Scroll "Fx.Scroll"