console.log("The javascript file is called ");

var btnInsert = document.getElementById("btnInsert");
btnInsert.addEventListener('click', insertRecord);

var btnPopulateList = document.getElementById("btnPopulateList");
btnPopulateList.addEventListener('click', PopulateListBox);


function GetData() {
    // Instantiate xhr object
    var xhr = new XMLHttpRequest();
    console.log(xhr.readyState);
    // open the object
    xhr.open("GET", "https://jsonplaceholder.typicode.com/albums", true);
    console.log(xhr.readyState);
    xhr.onreadystatechange = handleRequestStateChange;
    // Send the Request
    xhr.send(null);


    function handleRequestStateChange() {
        console.log(xhr.readyState);
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("if loaded");
            document.getElementById("div1").innerHTML = xhr.responseText;
        }
        //else {
        //     console.error("some error");
        //}
    }
}

function insertRecord() {
    console.log("Insert button clicked");
    // Instantiate xhr object
    var xhr = new XMLHttpRequest();
    // open the object
    xhr.open("POST", "https://reqres.in/api/users", true);

    xhr.getResponseHeader('Content-Type', 'application/json');
    params = {
        "name": "Ajay Sood",
        "job": "Consultant"
    };
    xhr.onreadystatechange = handleRequestStateChange;
    xhr.send(params);

    function handleRequestStateChange() { //this will work instead of var funcName=function(){}
        //console.log(xhr.readyState);
        //console.log(xhr.status);
        if (xhr.readyState == 4 && xhr.status == 201) {
            alert("if loaded");
            alert("Record created");
            console.log(xhr.responseText);
           // document.getElementById("div1").innerHTML = xhr.responseText;
        }
        //else {
        //     console.error("some error");
        //}
    }
}

function PopulateListBox() {
    // Instantiate xhr object
    var xhr = new XMLHttpRequest();

    // console.log(xhr.readyState);
    // open the object
    xhr.open("GET", "https://jsonplaceholder.typicode.com/comments", true);

    // console.log(xhr.readyState);
    xhr.onreadystatechange = handleRequestStateChange;
    // Send the Request
    xhr.send();

    function handleRequestStateChange() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var object = JSON.parse(xhr.responseText);
            console.log(object);
            let list = document.getElementById("list");
            str = "";
            for (key in object) {
                str += `<li> ${object[key].id}</li>`;
            }
            list.innerHTML = str;

        }

    }

}