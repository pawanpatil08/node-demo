const express = require('express');
const app = express();
app.set('view-engine', 'ejs')
app.use(express.static('public'))
// app.listen(3000);
port=3000
app.listen(port,  () => {
  console.log(`Server running at http://localhost:${port}/`);
});

app.use(express.urlencoded({
    extended: true
  }))

app.post('/sign-up', (req, res) => {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const subscribe = req.body.subscribe;

    // console.log(fName,lName,email,subscribe);
    subscribe?
    res.write(`Hello ${fName} ${lName}, 
    Thank you for signing up. Your account is now created.
    You would be receiving our periodic newsletters to your email: ${email}`)
    :
    res.write(`Hello ${fName} ${lName},
     Thank you for signing up. Your account is now created`)
    res.end();
  })
  


