var id=0;
var total=0;
function Add(){
    id++;
    var pname = document.getElementById("pname").value;
    var qty = document.getElementById("pqty").value;
    var price = document.getElementById("price").value;
    var sub = qty * price ;
    total+=sub;
    var row = "<tr>";
        row+="<td>"+id +"</td>";
        row+="<td>"+pname+"</td>";
        row+="<td>"+qty+"</td>";
        row+="<td>"+price+"</td>";
        row+="<td>"+sub +"</td>";
        row+="</tr>";
        document.getElementById("table").innerHTML+=row;
        document.getElementById("total").innerHTML =total;          
 }