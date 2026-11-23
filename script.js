$(document).ready(function() {

    // Hover effect
    $(".box").hover(
        function() {
            $(this).css("background-color", "#f5c1d7");
        },
        function() {
            $(this).css("background-color", "#ffe6f0");
        }
    );

    // Welcome message
    $(".home h1").click(function() {
        alert("Welcome to Chandana's Bloomfolio!");
    });

});