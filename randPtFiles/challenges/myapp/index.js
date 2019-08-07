const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

// import {bigOak} from "./crow-tech";
// app.get("./crow-tech.mjs",(req, res) => res.send(
//     bigOak.readStorage("food caches", caches => {
//         let firstCache = caches[0];
//         bigOak.readStorage(firstCache, info => {
//           console.log(info);
//         });
//       });
    
))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))