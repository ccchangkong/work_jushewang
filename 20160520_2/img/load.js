// JavaScript Document
/*延迟加载*/
jQuery(document).ready(function($) {
    $(".load img").lazyload({
/*        placeholder: "../../img/TransparentBackground.png",
		event : "click", */
		effect: "fadeIn",
        threshold: 200,
		failurelimit: 20
    });
});