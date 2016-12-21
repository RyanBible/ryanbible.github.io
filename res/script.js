$(document).ready(function() {
    //filter
    $("nav span").click(function() {
        $("nav span").removeClass("filterselected");
        $(this).addClass("filterselected");
        $("body").toggleClass("clean");
    });
    //Comment boxes
    $(".comment").append('<img src="res/comment.svg"/>');
    $(".comment").mouseover(function() {
        $(this).append('<span class="hoverbox">' + $(this).data("comment") + '</span>');
    });
    $(".comment").mouseout(function() {
        $(".hoverbox").remove();
    });
    $(".wordcomment").mouseover(function() {
        $(this).append('<span class="hoverbox">' + $(this).data("comment") + '</span>');
    });
    $(".wordcomment").mouseout(function() {
        $(".hoverbox").remove();
    });
    //Change background color boxes
    $("button").each(function() {
        $(this).css("background-color", $(this).data("background"));
    });
    $("button").click(function() {
        $("body").css("background-color", $(this).data("background"));
    });
    //Chapters
    $(".ch").each(function() {
        $(this).attr("id", $(this).html());
    });
    //Side link bar
    $("#sidebar div").each(function() {
        $(this).data("link", "#" + $(this).html());
    });
    $("#sidebar div").click(function() {
        var $root = $('html, body');
        $root.animate({
            scrollTop: $($(this).data("link")).offset().top - 50
        }, 500);
        return false;
    });
    var numItems = $('#sidebar div').length;
	console.log("Number of items: " + numItems);
    var height = $(window).height();
	console.log("Window height: " + height);
    $("#sidebar div").each(function() {
        $(this).css("height", (height - 40) / numItems);
    });
    $(window).resize(function() {
        var height = $(window).height();
        $("#sidebar div").each(function() {
            $(this).css("height", (height - 50) / numItems);
			console.log("Window height: " + height);
        });
    });
});