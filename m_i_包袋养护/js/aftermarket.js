$(document).ready(function() {
	$("#aftermarket .brand ul .button").click(function() {
		$(this).css("display", "none").siblings().css("display", "block");
	});
	$("#aftermarket .brand ul .button1").click(function() {
		$(this).css("display", "none");
		$("#aftermarket .brand ul .button").css("display", "block").nextAll("li").css("display", "none");

	});
});

/*上传图片*/
$('#test').diyUpload({
	url: 'server/fileupload.php',
	success: function(data) {
		console.info(data);
	},
	error: function(err) {
		console.info(err);
	}
});