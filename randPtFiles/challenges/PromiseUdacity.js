console.log("Promises by Udacity.")

// new Promise(function(resolve, reject){
//     resolve("Hello");
//     resolve("Hi");
// })

/*
// (A)

var data = get("data.json");
data.onload = function() {
  analyze(this.responseText);
};

// (B)

hugeArrayOfImages.forEach(function(i) {
  makeSepia(i);
});

// (C)

data.forEach(function(d) {
  var div = createDiv(d);
  body.appendChild(div);
});

// (D)

var worker = new Worker("worker.js");
worker.postMessage(data);
worker.onmessage = doSomething;

*/



// new Promise(function(resolve, reject){
//     var img = document.createElement("img");
//     img.src = "image.jpg";
//     img.onload = resolve;
//     img.onerror = reject;
//     document.body.appendChild(img);
// })
// .then(finishedLoading)
// .catch(showAlternateImage);

// new Promise(function(resolve, reject){
//     var value= doSomething();
//     if(thingWorked){
//         resolve(value);
//     }else if (doSomethingWentWrong){
//         reject();
//     }
// }).then(function(value){
//     return nextThing(value);
// }).catch(rejectFunction);

new Promise(function(resolve){
    console.log("first");
    resolve();
    console.log("second");
}).then(function(){
    console.log("third");
});



function wait(ms) {
    /*
    Your code goes here!

    Instructions:
    (1) Wrap this setTimeout in a Promise. resolve() in setTimeout's callback.
    (2) console.log(this) inside the Promise and observe the results.
    (3) Make sure wait returns the Promise too!
     */
    window.setTimeout(function() {}, ms);
};

new Promise(function wait(){
    window.setTimeout(function(){
        
    })
})
/*
Uncomment these lines when you want to test!
You'll know you've done it right when the message on the page changes.
 */
// var milliseconds = 2000;
// wait(milliseconds).then(finish);


// This is just here to help you test.
function finish() {
    var completion = document.querySelector('.completion');
    completion.innerHTML = "Complete after " + milliseconds + "ms.";
};

