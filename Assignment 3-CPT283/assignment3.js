/*format table*/
$(document).ready(function()
{
    $("#tables") .click(function()
    {
        $(".courses tr:first") .addClass("header");
        $(".courses tr:even:not(tr:first)").addClass("altrow");

    });
});
/*add image*/
$(document).ready(function() 
{
    $("#image").on("click", function() 
    {
        $("#myImage").append("<img src='jquery_cover.jpg'/>");
    });
});
/*red border*/
$(document).ready(function() 
{
    $("#boarder").click(function() {
        $("div").addClass("enclose");
    });
});
/*adjust image*/
$(document).ready(function() 
{
    $("#image").on("mouseover", function() {
        $("#myImage").animate({width:"200%", height: "200%"});
    });
    $("#image").on("mouseleave", function() {
        $("#myImage").animate({width:"200px", height: "250px"});
    });

});