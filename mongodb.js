const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use("/node_modules", express.static('node_modules'));

const db_conn = config.get("db.conn_str");
console.log(db_conn);
mongoose.connect(db_conn, {useNewUrlParser: true})
.then(() => {
    console.log("Database connected")
})
.catch((ex) => {
    console.log(ex.message);
});

const userSchema = mongoose.Schema({
    "username": {
        type: String,
        required: true
    },
    "location": {
        type: String,
        required: true
    },
    "interest": [String],
    "org": {
        type: String,
        required: true
    },
    "active": {
        type: Boolean,
        required: true
    },
    "salary" : {
        type:Number,
        required: function() {
            return this.active
        }
    }
});

const userModel = mongoose.model("users", userSchema);
const blogSchema = mongoose.Schema({
    title: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    isPublished: {
        type: Boolean,
        default : true,
    }
});

const blogModel = mongoose.model("blogs", blogSchema);

app.get("/", (req,res) => {
    res.sendFile(__dirname+"/index.html");
});


app.get("/getusers", async(req,res) => {
    try {
        const result = await userModel.find({})
        // .select({username:1, user_id:1})
        .limit(3)
        .sort({username:-1});

        res.status(200).send(result);
    }
    catch(ex) {
        res.status(403).send(ex.message);
    }
});

//To get the data using post request and save it in a document we use. This helps in saving the document into the mongodb collection.
app.post("/createUser", async (req,res) => {
    try {
        const user_doc = userModel(req.body);
        const result = await user_doc.save();   
        res.status(200).send(result) 
    }
    catch(ex){
    res.status(403).send(ex.message);
    }
});

app.post("/createBlogs", async (req,res) => {
    try {
        const blog = blogModel(req.body);
        const result = await blog.save();   
        res.status(200).send(result) 
    }
    catch(ex){
    res.status(403).send(ex.message);
    }
});

app.get("/blogs", async(req,res) => {
    try {
        const result = await blogModel.find()
        .populate("author")
        res.status(200).send(result);
        
    }
    catch(ex) {
        res.status(403).send(ex.message);
    }
   
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running @localhost:"+port);
})

