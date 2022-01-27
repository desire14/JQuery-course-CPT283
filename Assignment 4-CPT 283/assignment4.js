$(document).ready(function(){
    $("#area1").offset({left:200, top: 200});
    $("#area2").offset({left:350, right: 100, top: 250});
    $("#area3").offset({left:300, right: 100, top: 330});
    $("#area4").offset({left:720, right: 700, top: 430});
    $("#area5").offset({left:720, right: 700, top: 460});
    $("#area6").offset({left:720, right: 700, top: 530});

});


$(document).ready(function(){
    $("#moveUp").css({"background-color": "blue", "color": "white", "font-size": "16px"});
    $("#moveDown").css({"background-color": "blue", "color": "white", "font-size": "16px"});
    $("#changeText").css({"background-color": "blue", "color": "white", "font-size": "16px"})

});

$(document).ready(function(){
    $("#moveUp").click(function(event) {
        event.preventDefault();
        $("#area3").scrollTop(+50);
    });
    $("#moveDown").click(function(event) {
        event.preventDefault();
        $("#area3").scrollTop(-50);
    });

    $("#changeText").click(function(event) {
        event.preventDefault();
        $("#area3").toggleClass(".newFont");
    });

});