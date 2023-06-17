const bodyParser = require('body-parser');
const express =require('express')
const app =express()
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
const mysql =require('mysql2') 



const db =mysql.createConnection({
    host: 'localhost',
    user: 'root' ,
    password:'admin',
    database: 'employeessystem'
})



app.post('/create' ,(req,res) => {
    const { name, age, country, position, wage } = req.body;
    console.log(req.body)

    db.query('INSERT INTO emplyees (name,age,country,position,wage) VALUES(?,?,?,?,?)',
    [name,age,country,position,wage], (err,result) =>{
        if (err) {
            console.log(err)
        }else{
            res.send("value Inserted")
        }
        }
    );

})



app.listen(3001, () => {
    console.log("server listen to port 3001")
})


