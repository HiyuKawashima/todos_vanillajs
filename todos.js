var table = document.getElementById("todolist");

function addToDo() {
    //入力ボックスの内容を表示する
    if(window.event.keyCode==13){
        let input = document.getElementById("inputtext").value;
        if(input ===""){
            return false;
        }

        let table = document.getElementById("todolist");

        let row = table.insertRow(-1);

        let cell1 = row.insertCell(-1);
        let cell2 = row.insertCell(-1);
        var cell3 = row.insertCell(-1);

        cell1.innerHTML = "<p><input type=\"checkbox\" value=\"test\"></p>";
        cell2.innerHTML = input;
        cell3.innerHTML = "<p id=\"closebtn\">×</p>";

        document.getElementById("inputtext").value="";
    }
    
}