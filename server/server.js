import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "",
    database: "stm_ecommerce"
})

app.post('/register', (req, res) => {
    const sql = "insert into Register (`name`, `email`, `password`) values (?) ";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error for hashing the password"});

        const values = [
            req.body.name, 
            req.body.email, 
            req.body.password
        ]
        db.query(sql, [values], (err, res) => {
            if(err) return res.json({Error: "Inserting data error into the server"});

            return res.json({Status: "Success"}); 
        })
    })
    
})

app.listen(8081, () => {
    console.log("Running...");
}) 