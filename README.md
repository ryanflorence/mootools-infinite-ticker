InfiniteTicker
==============

Scrolls an element with overflow infinitely by moving elements scrolled out of view back into the other side of the element to be scrolled back in to view later.

How to use
----------

*HTML*

Set up your HTML quite simply for vertical tickers:

    <ul class="ticker" id="ticker_up">
    	<li class="red">1</li>
    	<li class="green">2</li>
    	<li class="blue">3</li>
    	<li class="red">4</li>
    	<li class="green">5</li>
    	<li class="blue">6</li>
    </ul>
	
And usually you have to toss in an extra wrapper for horizontal tickers to force an overflow:

    <div class="horizontal" id="ticker_right">
    	<div class="inner">
    		<p class="red">1</p>
    		<p class="green">2</p>
    		<p class="blue">3</p>
    		<p class="red">4</p>
    		<p class="green">5</p>
    		<p class="blue">6</p>
    	</div>
    </div>

*CSS*

Again, quite simple for vertical tickers, you have to create an overflow by defining a height.  Of course, set the overflow to hidden so you don't see the elements that overflow.

    .vertical_ticker {
    	overflow: hidden;
    	height: 100px;
    }

And for horizontal tickers you usually need to force an overflow by creating a fatty width on an inner element:

    div.horizontal {
      /* outer element */
      overflow: hidden;
    	width: 435px;
    }
    
    div.horiztonal > div.inner {
      width: 870px; /* usually equal to the sum children's width */
    }

*JS*

The JS is the easiest part!

    var myTicker = new InfiniteTicker('ticker',{
    	duration: 1000,
    	transition: 'quad:out',
    	direction: 'down',
    	autostart: false
    });
    
View the [MooDoc](http://moodocs.net/rpflo/mootools-rpflo/InfiniteTicker) for all available methods.