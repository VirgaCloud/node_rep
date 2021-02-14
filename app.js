const functions = require("./functions")
const path = require("path");
// functions.add(1, 2);
// functions.helloWorld();

//STAWIAMY SERWER z express
const express = require('express');
const app = express();
const port= 3000;



app.set("view engine", "hbs");

//Umieszczanie css za pomocą use, które przyjmuje 2 parametry
app.use("/assets", express.static(path.join(__dirname, "./assets"))) //dirname to ścieżka/ join łączy assets ze ścieżką dostępu
//Umieszczanie js
app.use("/js", express.static(path.join(__dirname, "./js")))

//za pomocą metody get możemy wyświetlić coś na www; przyjmuje 2 parametry
app.get("/", function(req,res){
    // res.send("Główna domena")
    res.render("index",{
        pageTitle: "Zajęcia 14.02.2021",
        subTitle: functions.subTitle,subsubTitle: functions.sample()
    })
})
app.get("/about", function(req,res){
    // res.send("<h3>O mnie</h3>")
    res.render("about")
})


//serwer ma słuchać na port 3000
app.listen(port, (err) => {
    if(err) {return console.log(`błąd ${err}`)}
    console.log(`Serer działa na porcie ${port}`)
});