$(document).ready(function()
{
    $("#imgAnimate").hover(
        function()
        {
            $(this).attr("src", "Images/corona_showdown.gif");
        },
        function()
        {
            $(this).attr("src", "Images/corona_still.png");
        });
});