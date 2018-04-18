let count = 0;
let left = 0;

function addToDo() {
    //入力ボックスの内容を表示する
    if(window.event.keyCode === 13){

        let input = document.getElementById("inputtext").value;

        if(input === ""){
            return false;
        }

        let table = document.getElementById("todolist");

        let row_len = table.rows.length;

        if(row_len === 1){
            row_len = 0;
        }
        let row = table.insertRow(row_len-1);

        let cell1 = row.insertCell(-1);
        let cell2 = row.insertCell(-1);
        let cell3 = row.insertCell(-1);

        cell1.innerHTML = "<p><input type=\"checkbox\" id=\"checkbox_" + (count + 1) + "\" onchange=\"isCheck()\"></p>";
        cell2.innerHTML = "<p id=\"elem_todo\">" + input + "</p>";
        cell3.innerHTML = "<p id=\"closebtn\" onclick=\"deleteRow(" + (count+1) + ")\">×</p>";

        document.getElementById("inputtext").value="";

        if(count === 0){
            document.getElementById("allselect").innerHTML = "▽";

            row = table.insertRow(-1);
            row.style.height =45;

            cell1 = row.insertCell(-1);

            cell1.colSpan = 3;

            cell1.innerHTML = "<p id=\"footer\">" + left + " items left</p>";
        } else{
           
        }

        count += 1;

        for(let i = 1; i <= count; i++){
            if(document.getElementById("checkbox_" + i).checked === false){
                left ++;
            }
        }
        document.getElementById("footer").innerHTML="<p id=\"footer\">" + left + " items left</p>";
        left = 0;
    }
}

function isCheck(){
    for(let i = 1; i <= count; i++){
        if(document.getElementById("checkbox_" + i).checked === false){
                left ++;
        }
    }
    document.getElementById("footer").innerHTML="<p id=\"footer\">" + left + " items left</p>";
    left = 0;
}

function deleteRow(id){
    //let table = document.getElementById("todolist");
    //row = table.deleteRow(id);
}