// const button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function(){
//     console.log("clicked");
// })


// const button = document.getElementById("enter");
// const input = document.getElementById("userinput");
// const ul = document.querySelector("ul");

// button.addEventListener("click", function(){
//     // console.log("test");
//     if(input.value.length >0){
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }
// });

// input.addEventListener("keypress", function(event){
//     // console.log("test");
//     // event.preventDefault(); don't use it here.
//     if(input.value.length > 0 && event.keyCode===13){
//     // if(input.value.length >0){
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }
// // }
// });



    // let myList = document.querySelectorAll("li");
    // for(let i=0; i<myList.length; i++){
    //     console.log(myList[i]);
    // }


    //DRY Strategy
    const button = document.getElementById("enter");
    const input = document.getElementById("userinput");
    const ul = document.querySelector("ul");
    const removeButton = document.getElementById("remove");
    
    //func length.
    function evalLength(){
        return input.value.length;
    }
    

    function createElList(){
        if (evalLength() > 0) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
            input.value = "";
    }
}
    function createAfterClick(){
        if(evalLength() > 0){
            createElList();
        }
    }

    function createAfterEnter(event){
        if(evalLength()> 0 && event.keyCode===13){
        createElList();
        }
    }



    // button.addEventListener("click", createAfterClick);
    input.addEventListener("keypress", createAfterEnter);
    removeButton.addEventListener("click", removeElList);