const express = require('express');
const cors = require('cors');
const { PythonShell } = require('python-shell');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.post("/apiTest", (req,res,next) => {

  const message = req.body.message;

  console.log(message)
  
  let options = {
    scriptPath: "./",
    args: [message]
  }
  
  PythonShell.run("test.py", options, (err, response) => {
    if (err) console.log(err);
    if (response) res.send({stuff: response[0]});;
  })

  // res.send({stuff: message});

})