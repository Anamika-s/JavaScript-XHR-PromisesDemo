console.log("Ajax Called");
let fetchbtn = document.getElementById("fetchBtn");
 
fetchbtn.addEventListener('click', buttonClickHandler);
console.log("evnet added");

let PopulateBtn = document.getElementById("PopulateBtn");

PopulateBtn.addEventListener('click', populateButtonClickHandler);


function buttonClickHandler() {

    console.log("Button is clicked");
    // Instantiate xhr object
    var xhr = new XMLHttpRequest();

    // console.log(xhr.readyState);
    // open the object
    xhr.open("POST", "https://reqres.in/api/users", true);
    xhr.getResponseHeader('Content-Type', 'application/json');
    params = {
        "name": "Anamika Sawhney",
        "job": "Consultant"
    };

    // console.log(xhr.readyState);
    xhr.onreadystatechange = handleRequestStateChange;
    // Send the Request
    xhr.send(params);

    function handleRequestStateChange() { //this will work instead of var funcName=function(){}
        console.log(xhr.readyState);
        console.log(xhr.status);
        if (xhr.readyState == 4 && xhr.status == 201) {
            alert("if loaded");
            document.getElementById("d1").innerHTML = xhr.responseText;
        }
        //else {
        //     console.error("some error");
        //}
    }
}


//function buttonClickHandler() {

//    console.log("Button is clicked");
//    // Instantiate xhr object
//    var xhr = new XMLHttpRequest();

//   // console.log(xhr.readyState);
//    // open the object
//    xhr.open("GET", "https://reqres.in/api/users", true);

//   // console.log(xhr.readyState);
//    xhr.onreadystatechange = handleRequestStateChange;
//    // Send the Request
//    xhr.send(null);

//    function handleRequestStateChange() { //this will work instead of var funcName=function(){}
//        console.log(xhr.readyState);
//         if (xhr.readyState == 4 && xhr.status == 200) {
//            alert("if loaded");
//            document.getElementById("d1").innerHTML = xhr.responseText;
//        }
//        //else {
//        //     console.error("some error");
//        //}
//        }
//    }



function populateButtonClickHandler() {

    
    // Instantiate xhr object
    var xhr = new XMLHttpRequest();

   // console.log(xhr.readyState);
    // open the object
    xhr.open("GET", "https://jsonplaceholder.typicode.com/comments", true);

   // console.log(xhr.readyState);
    xhr.onreadystatechange = handleRequestStateChange;
    // Send the Request
    xhr.send(null);

    function handleRequestStateChange() { //this will work instead of var funcName=function(){}
        console.log(xhr.readyState);
         if (xhr.readyState == 4 && xhr.status == 200) {
             alert("if loaded");
             let obj = JSON.parse(xhr.responseText);
             console.log(obj);
             let list = document.getElementById("list");
             str = "";
             for (key in obj) {
                 str += `<li> ${obj[key].name}</li>`;
             }
             list.innerHTML = str;
          //  document.getElementById("d1").innerHTML = xhr.responseText;
        }
        //else {
        //     console.error("some error");
        //}
        }
    }
