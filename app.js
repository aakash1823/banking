const express=require('express')
let app=express()
const cors=require('cors')
app.use(cors())
const path = require('path');
var bodyParser = require("body-parser");

app.use(express.static('./public'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
// crud 
var sql = require("mysql");
var sqlConnection = sql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "root",
    database: "BankCustomers",
    multipleStatements: true
});
sqlConnection.connect(function(err) {
    if (!err) {
        console.log("Connected to SQL");
    } else {
        console.log("Connection Failed" + err);
    }
});
app.use('/api',require('./api'))
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname+'/public/index.html'))
// })

//Login to his or her page
app.post('/view',(req,res)=>{
    var {cusid}=req.body
    console.log(req.body)
    console.log(cusid)
    console.log("hgfdgh")
    var query = sqlConnection.query(`Select * from customer where custid="${cusid}"`,function(err,results,field){
        if (results.length == 0) {
            console.log(results);
            res.send("User Not Foundd!!");
        }
        else{
            res.json("Success")
            
            console.log("succress")
          
        }
       
    })
})
//Transaction
app.post('/trans',(req,res)=>{
    var {accountno,amount,b}=req.body
    console.log(accountno)
    
    sqlConnection.query(`Select acnumber from customer WHERE custid = "${b}" `,function(err,results3,field){
        var c= results3[0].acnumber
        console.log("hi")
        console.log(c)
    sqlConnection.query(`UPDATE Customer SET opening_balance = opening_balance-"${amount}" WHERE custid = "${b}" `,function(err,results,field){

            // res.json("Success")
            sqlConnection.query(`Select opening_balance from customer WHERE custid = "${b}" `,function(err,results1,field){
                console.log(results1)
                if(results1[0].opening_balance>0){
                    sqlConnection.query(`UPDATE Customer SET opening_balance = opening_balance+"${amount}" WHERE acnumber = "${accountno}" `,function(err,results2,field){
                        if(results2.affectedRows=="1"){
                            var status="SUCCESS"
                            sqlConnection.query(`INSERT into transaction_process(frm_acc_no,to_acc_no,amount,tran_status) values( "${c}","${accountno}","${amount}","${status}" )`,function(err,results1,field){

                            res.send("SUCCESS")
                            })
                        }else{
                            sqlConnection.query(`UPDATE Customer SET opening_balance = opening_balance+"${amount}" WHERE custid = "${b}" `,function(err,results,field){
                                var status="FAILURE"
                                sqlConnection.query(`INSERT into transaction_process(frm_acc_no,to_acc_no,amount,tran_status) values( "${c}","${accountno}","${amount}","${status}" )`,function(err,results1,field){

                                    res.send("INVALID ACCOUNT NO")
                                })
                            })
                        }
                    })
                }else{
                    sqlConnection.query(`UPDATE Customer SET opening_balance = opening_balance+"${amount}" WHERE custid = "${b}" `,function(err,results,field){
                        var status="FAILURE"
                        sqlConnection.query(`INSERT into transaction_process(frm_acc_no,to_acc_no,amount,tran_status) values( "${c}","${accountno}","${amount}","${status}" )`,function(err,results1,field){

                            res.json("FUNDS INSUFFICIENT")
                        })
                    })
                }
            })
        
    })
}) 
})
//Display the particular customer details
app.get('/view/:id',(req,res)=>{
    
    var query = sqlConnection.query(`Select * from customer where custid="${req.params.id}"`,function(err,results,field){
        if (results.length == 0) {
            console.log(results);
            res.send("User Not Foundd!!");
        }
        else{
            res.json(results)
            console.log(results)
        }
       
      
    })
})
app.get('/history/:id',(req,res)=>{
    sqlConnection.query(`Select acnumber from customer WHERE custid = "${req.params.id}" `,function(err,results3,field){
        var c= results3[0].acnumber
    var query = sqlConnection.query(`Select * from transaction_process where frm_acc_no="${c}"`,function(err,results,field){
        // if (results.length == 0) {
        //     console.log(results);
        //     res.send("User Not Foundd!!");
        // }
        // else{
            res.json(results)
            console.log(results)
        // }
       
      
    })
})
})
app.get('/selection/:id',(req,res)=>{
    
    var query = sqlConnection.query(`Select acnumber from customer where custid!="${req.params.id}"`,function(err,results,field){
        if (results.length == 0) {
            console.log(results);
            res.send("User Not Foundd!!");
        }
        else{
            res.json(results)
            console.log(results)
        }
       
      
    })
})
app.get('/alltrans',(req,res)=>{
    
    var query = sqlConnection.query(`Select * from transaction_process`,function(err,results,field){
        

            if (results.length == 0) {
            console.log(results);
            res.send("User Not Foundd!!");
        }
        else{
            res.json(results)
            console.log(results)
        }
       
    
    })
})
app.get('/newesttrans',(req,res)=>{
    
    var query = sqlConnection.query(`SELECT * FROM transaction_process ORDER BY id DESC`,function(err,results,field){
        if (results.length == 0) {
            console.log(results);
            res.send("User Not Foundd!!");
        }
        else{
            res.json(results)
            console.log(results)
        }
       
      
    })
})
app.get('/success',(req,res)=>{
    
    var query = sqlConnection.query(`SELECT * FROM transaction_process where tran_status="SUCCESS"`,function(err,results,field){
        if (results.length == 0) {
            console.log(results);
            res.send("User Not Foundd!!");
        }
        else{
            res.json(results)
            console.log(results)
        }
       
      
    })
})
app.get('/failure',(req,res)=>{
    
    var query = sqlConnection.query(`SELECT * FROM transaction_process where tran_status="FAILURE"`,function(err,results,field){
        if (results.length == 0) {
            console.log(results);
            res.send("User Not Foundd!!");
        }
        else{
            res.json(results)
            console.log(results)
        }
       
      
    })
})


// app.get('/view/:cusid/:pass',(req,res)=>{
    
//     var query = sqlConnection.query(`Select * from customer where custid="${req.params.cusid}" and pass="${req.params.pass}"`,function(err,results,field){
//         if (results.length == 0) {
//             console.log(results);
 
//        }
//         else{
//             res.json("Success")
//         }
        
        
      
//     })
// })

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.listen(8080)