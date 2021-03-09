$(document).ready(function () {
    $("#imgAnimate1").hover(
        function () {
            $(this).attr("src", "Images/corona_showdown.gif");
        },
        function () {
            $(this).attr("src", "Images/corona_still.png");
        });
    $("#imgAnimate2").hover(
        function () {
            $(this).attr("src", "Images/eatDaBurger.gif");
        },
        function () {
            $(this).attr("src", "Images/eatDaburgerStart.png");
        });
        $("#imgAnimate3").hover(
            function () {
                $(this).attr("src", "Images/jeopardyTrivia.gif");
            },
            function () {
                $(this).attr("src", "Images/jeopardyStart.png");
            });
});