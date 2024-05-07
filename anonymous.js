$(function(){
    $("#load").click(function(){
        $.get("St.txt", function(Response){
            $("#result").empty();
            $("#result").append(Response);
        });
    });
});