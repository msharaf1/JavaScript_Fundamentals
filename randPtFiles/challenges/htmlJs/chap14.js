// function talksAbout(node, string){
//     if(node.nodeType == Node.ELEMENT_NODE){
//         for(let i =0; i < node.childNodes.length;i++){
//             if(talksAbout(node.childNodes[i], string)){
//                 return true;
//             }
//         }
//         return false;
//     }else if(node.nodeType == Node.TEXT_NODE){
//         return node.nodeValue.indexOf(string) > -1;
//     }
// }
// console.log(talksAbout(document.body, "book"));


// let linkHref = document.body.getElementsByTagName("a")[0];
// console.log(linkHref.href);

// let google = document.body.getElementsByTagName("a")[1];
// console.log(google);

// let ostrich = document.getElementById("gertrude");
// console.log(ostrich);
// let container = document.getElementsByClassName("container");
// console.log(container);

// let paragraphs = document.body.getElementsByTagName("p");
// document.body.insertBefore(paragraphs[2], paragraphs[1]);

// function replaceImages(){
//     let images = document.body.getElementsByTagName("img");
//     for(let i = images.length -1; i >=0; i--){
//         let image = images[i];
//         if(image.alt){
//             let text = document.createTextNode(image.alt);
//             image.parentNode.replaceChild(text, image);
//         }
//     }
// }
// // replaceImages();

// let arrayish = {0: "one", 1: "two", length:2};
// let array = Array.from(arrayish);
// console.log(array.map(s => s.toUpperCase()));

// function elt(type, ...children){
//     let node = document.createElement(type);
//     for(let child of children){
//         if(typeof child != "string") node.appendChild(child);
//         else node.appendChild(document.createTextNode(child));
//     }
//     return node;
// }

// // document.getElementById("quote").appendChild(
// //     elt("footer", "—",
// //         elt("strong", "Karl Popper"),
// //         ", preface to the second edition of ",
// //         elt("em", "The Open Society and Its Enemies"),
// //         ", 1950"));

// let paras = document.body.getElementsByTagName("p");
// // console.log(paras);
// for(let para of Array.from(paras)){
//     if(para.getAttribute("data-classified") == "secret"){
//         para.remove();
//     }
// }



// function time(name, action) {
//     let start = Date.now(); // Current time in milliseconds
//     action();
//     console.log(name, "took", Date.now() - start, "ms");
//   }

//   time("naive", () => {
//     let target = document.getElementById("one");
//     while (target.offsetWidth < 2000) {
//       target.appendChild(document.createTextNode("X"))
//     //   break;
//     }
//   });
//   time("clever", function(){
//       let target = document.getElementById("two");
//       target.appendChild(document.createTextNode("XXXXX"));
//       let total = Math.ceil(2000/ (target.offsetWidth/5));
//       target.firstChild.nodeValue = "X".repeat(total);

//   })

// let para = document.getElementById("para");
// console.log(para.style.color);
// para.style.color = "blue";

// function count(seletor){
//     return document.querySelectorAll(seletor).length;
// }

//   console.log(count("p"));           // All <p> elements
//   // → 4
//   console.log(count(".animal"));     // Class animal
//   // → 2
//   console.log(count("p .animal"));   // Animal inside of <p>
//   // → 2
//   console.log(count("p > .animal")); // Direct child of <p>
//   //1
//   console.log(count(".character"));

