const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(function(req,res,next) {
    console.log("Request handled in custom middleware");
    next(); 
    
})

if(app.get("env")=="development") {
    console.log("Server started!!!")
}

app.get("/", (req, res) => {
    console.log("Root route")
    res.sendFile(__dirname+'/index.html');
 
});

app.get("/profile", (req, res) => {
    res.send("Welcome to profile page!!!");
 
});

app.post("/saveUser", function(req,res) {
    console.log(req.body);

})


app.use((req,res) => {
    res.redirect("/")
});

mod1.errFn();

app.listen(3000, () => {
    console.log("Server running @localhost:3000");
})
