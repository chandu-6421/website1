$(document).ready(function() {

    // Hover effect on portfolio cards
    $(".feature-card").hover(
        function() {
            $(this).css("filter", "saturate(1.08)");
        },
        function() {
            $(this).css("filter", "saturate(1)");
        }
    );

    // Welcome interaction
    $(".hero h1").on("click", function() {
        $(this).toggleClass("title-highlight");
    });

    // Highlight current navigation page
    var page = window.location.pathname.split("/").pop() || "index.html";

    $("nav a").each(function() {
        if ($(this).attr("href") === page) {
            $(this).addClass("active");
        }
    });

});