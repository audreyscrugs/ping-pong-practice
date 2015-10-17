$function() {
  $("#num-list").submit(function(event) {
    var number = prompt("Please enter a number");
    var int = 0;
    var name = "";

    for(int = 1; int <= number; int ++) {
            if(int % 3===0 && int % 5 === 0) {
                name="ping pong";
            } else if(int % 3 === 0) {
                name = "ping";
            } else if(int % 5===0) {
                name= "pong"
            } else {
                name = int;
            }
            $("#display").append("<li>"+num+"</li>");
       });
});
