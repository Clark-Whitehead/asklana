const express = require('express');
const cors = require('cors');
const { PythonShell } = require('python-shell');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'asklana'
});

db.connect((err) => {
  if(err) {
    throw err;
  } else {
    console.log('Mysql connected');
  }
})



const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const initialPrompt = "Lana is the worlds smartest Artificial Intelligence. She tutors students online. \n\n"

app.post("/apiTest", (req,res,next) => {

  let message = req.body.message;

  message = initialPrompt + message
  
  let options = {
    scriptPath: "./",
    args: [message]
  }
  
  PythonShell.run("test.py", options, (err, response) => {
    if (err) console.log(err);
    if (response) res.send({responseOut: response[0]});;
  })

  // res.send({stuff: message});

})