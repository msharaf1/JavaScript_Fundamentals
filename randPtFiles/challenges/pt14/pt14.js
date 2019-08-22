console.log("Chap 14, The ElequentJavaScript");

const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];



// function addItem(item){
//     let li = document.createElement("li");
//     let text = document.createTextNode(item);
//     li.appendChild(text);
//     document.getElementById("myUl").appendChild(li);
// }
// // addItem("Helloworld")

// function iterateList(array, fn){
//     for(let i =0; i< array.length; i++){
//         fn(array[i]["name"]);
//     }
// }
// iterateList(MOUNTAINS, addItem);

// let td = document.getElementById("tdName");
// let tdC = document.createElement("td");
// let tdContent = document.createTextNode(" Hello world ");
// td.appendChild(tdContent);
// console.log(td);


// function countDOMNodes(){
//     let array = [];
//     let a = Array.from(document.body.childNodes);
//     let t1 = a[1].nextSibling;
//     let t2 = document.createTextNode("New Nod added here.");
//     console.log(
//         a[1].nextSibling.replaceWith(t2), document.getElementById("mountains")
//         );

//     // for(let i =0; i < document.body.childNodes.length; i++){
//         // document.body.childNodes[i]
//         // console.log(
//         // a
//         //     );
//         // console.log(array.length);
//     // }
// }countDOMNodes();

// function addPairValue(){
//     let tRow = document.createElement("tr");
//     let tD = document.createElement("td");
//     let con0 = document.createTextNode("Raw column");
//     let con1 = document.createTextNode("Raw column");
//     let con2 = document.createTextNode("Raw column");

    
//     let name = document.querySelectorAll("th")[0];
//     let height = document.querySelectorAll("th")[1];
//     let place = document.querySelectorAll("th")[2];
//     name.appendChild(con0);
//     height.appendChild(con1)
//     place.appendChild(con2);
// let date = new Date().getFullYear();
//     let cRow = document.querySelector("contentRow");
//     let conTd = document.createElement("td");
//     let con3 = document.createTextNode("Raw " + date);
//     let con4 = document.createTextNode("Raw " + (date +20));
//     let con5 = document.createTextNode("Raw " + (date +10));
//     let nameData = document.getElementById("tdName");
//     let heightData = document.getElementById("tdHeight");
//     let placeData = document.getElementById("tdPlace");

//     nameData.appendChild(con3);
//     heightData.appendChild(con4);
//     placeData.appendChild(con5);








    
//     console.log(name, height, place);
//     console.log(nameData, heightData, placeData);
// } 
// console.log(addPairValue());

const MOUNTAINS1 = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

//uncompleted.
function addDataToTable(arr){
    
    // thName.appendChild(t);
    
    for(let key of Object.keys(arr[0])){
        let tRowName = document.getElementById("bId");
        let tHead = document.createElement("th");
        tRowName.appendChild(tHead);
        let tData = document.createTextNode(key);
        tHead.appendChild(tData);
        console.log(tData);
        }
    for(let i = 0; i< arr.length; i++){
        let tRowName = document.getElementById("contentRow");
        let tDataRow = document.createElement("td");
        tRowName.appendChild(tDataRow);
        let tData = document.createTextNode(arr[i]["name"]);
        tDataRow.appendChild(tData);
        // console.log(tData);
        }

    // for(let key of Object.keys(arr[0])){
    //     console.log(key)
    // }

        
}
// console.log(addDataToTable(MOUNTAINS));

// function buildTable(data){
    
//     // thName.appendChild(t);
    
//     for(let key of Object.keys(arr[0])){
//         let tRowName = document.getElementById("bId");
//         let tHead = document.createElement("th");
//         tRowName.appendChild(tHead);
//         let tData = document.createTextNode(key);
//         tHead.appendChild(tData);
//         console.log(tData);
//         }
//     for(let i = 0; i< arr.length; i++){
//         let tRowName = document.getElementById("contentRow");
//         let tDataRow = document.createElement("td");
//         tRowName.appendChild(tDataRow);
//         let tData = document.createTextNode(arr[i]["name"]);
//         tDataRow.appendChild(tData);
//         // console.log(tData);
//         }

//     // for(let key of Object.keys(arr[0])){
//     //     console.log(key)
//     // }

        
// }

// function buildTable(data){
//     let table = document.createElement("table");
//     let fields = Object.keys(data[0]);
//     let headRow = document.createElement("tr");
//     fields.forEach(function(field){
//         let headCell = document.createElement("th");
//         headCell.textContent = field;
//         headRow.appendChild(headCell);
//     });
//     table.appendChild(headRow);
//     // console.log(table.appendChild(headRow));
//     data.forEach(function(object){
//         let row = document.createElement("tr");
//         fields.forEach(function(field){
//             let cell = document.createElement("td");
//             cell.textContent = object[field];
//             if(typeof object[field] == "number"){
//                 cell.style.textAlign = "right";
//             }
//             row.appendChild(cell);
//         });
//         table.appendChild(row);
//     });
//     return table;
// }
// document.querySelector("#mountains").appendChild(buildTable(MOUNTAINS))
// console.log(
//     buildTable(MOUNTAINS)
// );
// console.log(Object.keys(MOUNTAINS[0]));

function buildTable(data){
    let table = document.createElement("table");
    let fields = Object.keys(data[0]);
    let headRow = document.createElement("tr");
    fields.forEach(function(field){
        let headCell = document.createElement("th");
        headCell.textContent = field;
        headRow.appendChild(headCell);
    });
    table.appendChild(headRow);
    // console.log(table.appendChild(headRow));
    data.forEach(function(object){
        let row = document.createElement("tr");
        fields.forEach(function(field){
            let cell = document.createElement("td");
            cell.textContent = object[field];
            // console.log(object[field]);
            // if(typeof object[field] == "number"){
            //     cell.style.textAlign = "right";
            // }
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
    return table;      
}

// document.querySelector("#mountains").appendChild(buildTable(MOUNTAINS));

// console.log(buildTable(MOUNTAINS));

// toDo: https://eloquentjavascript.net/14_dom.html  Elements by tag name

