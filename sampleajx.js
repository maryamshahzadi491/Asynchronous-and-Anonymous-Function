$(function(){
    $("#load").click(sendAjax);
    });
    function sendAjax(){
    console.log("Sending Ajax request");
    //send request
    $.get("students.txt",handleResponse);
    console.log("sent");
    };
    function handleResponse(Response){
        console.log("Response Received");
        //console.log(Response);
        $("#result").empty();
        $("#result").append(Response);
    };