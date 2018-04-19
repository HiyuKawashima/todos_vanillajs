let count = 0;
let left = 0;
let list = [];
let isFooter = false;

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

        if(!isFooter){
            document.getElementById("allselect").innerHTML = "▽";

            row = table.insertRow(-1);
            row.style.height =45;

            cell1 = row.insertCell(-1);

            cell1.colSpan = 3;

            cell1.innerHTML = "<p id=\"footer\">" + left + " items left</p>";

            isFooter = true;
        } else{
           
        }

        count += 1;

        list.push(count);

        isCheck();
    }
}

function isCheck(){
    let checked = 0;
    for(let i = 0; i < list.length; i++) {
        if(document.getElementById("checkbox_" + list[i]).checked === false){
            left ++;
        }else{
            checked ++;
        }
    }

    if(checked > 0){
        document.getElementById("footer").innerHTML="<p id=\"footer\">" + left + " items left　　<input type=\"radio\" name=\"category\" value=\"all\" checked> All　　<input type=\"radio\" name=\"category\" value=\"active\"> Active　　<input type=\"radio\" name=\"category\" value=\"completed\"> Completed　　<a href=\"#\" onclick=\"allDelete()\">Clear completed</a></p>";
    }else{
        document.getElementById("footer").innerHTML="<p id=\"footer\">" + left + " items left　　<input type=\"radio\" name=\"category\" value=\"all\" checked> All　　<input type=\"radio\" name=\"category\" value=\"active\"> Active　　<input type=\"radio\" name=\"category\" value=\"completed\"> Completed</p>";
    }
    left = 0;

    if(document.getElementById("todolist").rows.length === 2){
        let table = document.getElementById("todolist");
        row = table.deleteRow(-1);
        document.getElementById("allselect").innerHTML = "";
        isFooter = false;
    }
    
}

function allCheck(){
    for(let i = 0; i < list.length; i++) {
        document.getElementById("checkbox_" + list[i]).checked = true;
    }
    isCheck();
}

function deleteRow(id){
    let table = document.getElementById("todolist");
    let index = list.indexOf(id,0)
    row = table.deleteRow(index + 1);
    list.splice(index,1);
    isCheck();
}

function allDelete(){
    let table = document.getElementById("todolist");
    let checkingRow = 1;

    for(let i = 0; i < list.length; i++) {
        if(document.getElementById("checkbox_" + list[i]).checked === true){
            let row = table.deleteRow(checkingRow);
            list.splice(i,1);
            i--;
        } else{
            checkingRow++;
        }
    }

    isCheck();
}