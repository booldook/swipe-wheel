var pages = [];
var Page = (function(){
	function Page(_obj) {
		this.obj = _obj;
		this.parent = this.obj.parent();
		this.prev = $(this.obj.data("prev"));
		this.next = $(this.obj.data("next"));
		this.direction = this.obj.data("direction");
		this.parent.css({"width":"100%", "height":"100%", "position":"relative"});
		this.obj.css({"width":"100%", "height":"100%", "position":"absolute", "top":"0px", "left":"0px"});
	}
	Page.prototype.init = function() {
		this.parent.css({"left":"0", "top":"0"});
		$(".page").css({"left":"0", "top":"0"}).not(this.obj).hide();
		this.obj.show();
		this.prev.show();
		this.next.show();
		pages[this.prev.data("id")].prevPos(this.direction);
		pages[this.next.data("id")].nextPos(this.direction);
		console.log("this->"+this.obj.attr("id"));
		console.log("direction->"+this.obj.data("direction"));
		console.log("prev->"+this.prev.attr("id"));
		console.log("next->"+this.next.attr("id"));
		console.log("=================");
		this.obj.on("mousewheel DOMMouseScroll", function(e) {
			e.preventDefault();
			e.stopPropagation();
			var dir = e.currentTarget.dataset.direction;
			var prevId = $(e.currentTarget.dataset.prev).data("id");
			var nextId = $(e.currentTarget.dataset.next).data("id");
			var css;
			var fn;
			$(this).off("mousewheel DOMMouseScroll");
			if(window.event.delta > 0) {
				if(dir == "vertical") css = {"top":"100%"};
				else css = {"left":"100%"};
				fn = function() {pages[prevId].init();};
			}
			else {
				if(dir == "vertical") css = {"top":"-100%"};
				else css = {"left":"-100%"};
				fn = function() {pages[nextId].init();};
			}
			$(".pages").stop().animate(css, 500, "swing", fn);
		});
	}
	Page.prototype.prevPos = function(dir) {
		if(dir == "vertical") this.obj.css("top", "-100%");
		else this.obj.css("left", "-100%");
	}
	Page.prototype.nextPos = function(dir) {
		if(dir == "vertical") this.obj.css("top", "100%");
		else this.obj.css("left", "100%");
	}
	return Page;
}());

(function(){
	$(".page").each(function(i){
		pages[i] = new Page($(this));
	});
	pages[0].init();
}());

