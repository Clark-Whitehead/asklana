const express = require('express');
const { PythonShell } = require('python-shell');

let options = {
  scriptPath: "./",
  args: ["A dog is a furry animal that"]
}


const app = express();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/sentence/", (req,res,next) => {
  
  PythonShell.run("test.py", options, (err, response) => {
    if (err) console.log(err);
    if (response) res.send({stuff: response[0]});;
  })

})