
//Callback: A function which will be called once we
//are finished calling some other method

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Your promise has been fulfilled");
                resolve();
            }
            else {
                console.log("Promise not fulfilled");
                reject("Sorry not fulfilled");
            }
        }, 2000);
    });
}
// consume the promise 
func1().then(function () {
    console.log("Thanks for resolving");
}).catch(function () {
    console.log("Sorry for not fulfilling promise");
});


