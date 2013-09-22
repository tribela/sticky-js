Element.prototype.sticky = function() {
	'use strict';
    var obj = this;
    var origPosition = obj.style.position;
    var origTop = obj.style.top;

    var wrapper = document.createElement('div');
    wrapper.style.cssText = "display: block; border: none; margin: 0; padding: 0;";
    obj.parentNode.insertBefore(wrapper, obj);
    wrapper.appendChild(obj);

    wrapper.style.height = wrapper.offsetHeight + "px";

    var scroller = function() {
        var scroll = window.scrollY || window.pageYOffset;

        if(scroll > wrapper.offsetTop && obj.style.position !== "fixed") {
            obj.style.position = "fixed";
            obj.style.top = "0";
        } else if(scroll <= wrapper.offsetTop && obj.style.position === "fixed") {
            obj.style.position = origPosition;
            obj.style.top = origTop;
        }
    }

    window.addEventListener('scroll', scroller, false);
}
//vim: expandtab:sts=4:sw=4
