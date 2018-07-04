# swipe-wheel
## **Page-turn plug-in using mouse wheel events (landscape, portrait)**

### What is swipe-wheel?
**Depending on the wheel event, the page moves horizontally or vertically**

### Get Started
```
<script src="jquery.swipe-wheel.min.js"></script>
```

### Usage
```
<div class="pages">
	<div id="p1" class="page" data-id="0" data-prev="#p4" data-next="#p8" data-direction="vertical">
		<div>page0</div>
	</div>
	.
	.
	.
</div>
```
* The tag that wraps the page is declared as class = "pages"
* Each page is declared as class = "page"

### Options
* The previous page to move when the wheel event occurs is [data-prev = "#id"]
* The next page to move when the wheel event occurs is [data-next = "#id"]
* Page scrolling method is as follows: [data-direction = "vertical | horizontal"]
* The data-id option must be an integer such as [data-id = "1"]. Because it is used as the key of the array.

-----
I hope you have a good time and send the question to booldook@gmail.com
