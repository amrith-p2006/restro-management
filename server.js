const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "restaurant_inventory"
});

db.connect((err) => {
    if(err){
        console.log("Database connection failed");
    } else{
        console.log("Connected to MySQL database");
    }
});
app.get("/ingredients", (req, res) => {

    const sql = "SELECT * FROM INGREDIENT";

    db.query(sql, (err, result) => {

        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }

    });

});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});   