var userTable = document.createElement('table');
userTable.setAttribute('id', 'userTable');
document.body.appendChild(userTable);

var tableHeadRow = userTable.insertRow(0);

var tableHeadArray = new Array();
tableHeadArray = ['User Name', 'Address', 'Age', 'Option'];

for (var i = 0; i < tableHeadArray.length; i++) {

    var th = document.createElement('th');
    th.innerHTML = tableHeadArray[i];
    tableHeadRow.appendChild(th);
}

userTable.setAttribute('cellpadding', '10px');

document.getElementById("addRow").addEventListener("click", function () {

    const username = document.getElementById("username");
    const address = document.getElementById("address");
    const age = document.getElementById("age");

    var tr = userTable.insertRow(-1);
    var tableDataArray = [username.value, address.value, age.value];

    for (var i = 0; i < tableDataArray.length; i++) {

        var td = tr.insertCell(-1);
        td.innerHTML = tableDataArray[i];
    }

    var td = tr.insertCell(-1);
    
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.innerHTML = 'Remove';

    button.setAttribute('onclick', 'remRow(this)');

    td.appendChild(button);

    username.value = "";
    address.value = "";
    age.value = "";

});

function remRow(el) {
    var uTable = document.getElementById('userTable');
    uTable.deleteRow(el.parentNode.parentNode.rowIndex);
}