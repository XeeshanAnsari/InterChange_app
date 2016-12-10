


//function for show Data
  
 
function showTable(){
   var user1 = document.getElementById("user1").value;
   var user1Prop = document.getElementById("user1-property").value;
   var user2 = document.getElementById("user2").value;
   var user2Prop = document.getElementById("user2-property").value;

    var table = document.getElementById("table");

    var data = "<tr><th> Name </th> <th> Property </th><tr> <tr><td> " + user1 + "</td><td> " + user1Prop + "</td></tr> <tr><td> " + user2 + "</td><td> " + user2Prop + "</td></tr> <tr><td><input type='submit' value='InterChange' onClick='interChange();'></td></tr>" ; 
    
    table.innerHTML = data;
}

    function interChange(){
         
        var user1 = document.getElementById("user1").value;
        var user1Prop = document.getElementById("user1-property").value;
        var user2 = document.getElementById("user2").value;
        var user2Prop = document.getElementById("user2-property").value;
        var table = document.getElementById("table");
        var data = "<tr><th> Name </th> <th> Property </th><tr> <tr><td> " + user1 + "</td><td> " + user2Prop+ "</td></tr> <tr><td> " + user2 + "</td><td> " + user1Prop + "</td></tr> <tr><td><input type='submit' value='InterChange' onClick='showTable();'></td></tr>" ; 
         table.innerHTML = data;
         
 
         
    }  