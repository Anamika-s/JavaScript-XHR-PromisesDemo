console.log("api called");

let x = document.getElementById("btnBtn");
let y = document.getElementById("container");

//function GetData() {
//    console.log("Started GetData");
//    url = "records.json";
//    fetch(url).then((response) => {
//        console.log("Inside First then");
//        return response.text();
//    }).then((data) => {
//        console.log("Inside Second then");
//        console.log(data);
//    });
//}

function GetData() {
    console.log("Started GetData");
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        console.log("Inside First then");
        return response.json();
    }).then((data) => {
        console.log("Inside Second then");
        console.log(data);
    });
}

function PostData() {
    console.log("Started PostData");
    data = {
        "name": "Anamika Sawhney",
        "job": "Consultant"
    },

    params =
    {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
                  "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        body:JSON.stringify(data)
    }
    url = "https://reqres.in/api/users";
    fetch(url,params).then(response =>  
      response.json()
    ).then(data =>  
         console.log(data)
    );
}

PostData();
//console.log("After Get Data");