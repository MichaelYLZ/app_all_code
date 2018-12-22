const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const DATA_FILE = path.resolve(__dirname, 'data.json');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.use(express.static('dist'));


app.get('/api/sentences', (req, res) => {
    
  fs.readFile(DATA_FILE, (err, data) => {
    if(err) throw err;
      
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
    
});

app.post('/api/sentences', (req, res) => {
  fs.readFile(DATA_FILE, (err, data) => {
    let sens = JSON.parse(data);
    
    const newSen = {
      sentence: req.body.sentence,
      id: req.body.id
    };
    sens = [...sens, newSen];
    fs.writeFile(DATA_FILE, JSON.stringify(sens, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(sens);
    });
  });
});

app.put('/api/sentences', (req, res) => {
    
  fs.readFile(DATA_FILE, (err, data) => {
    const sens = JSON.parse(data);
    sens.forEach((senObj) => {
      if (senObj.id === req.body.id) {
        senObj.sentence = req.body.sentence;
      }
    });
    fs.writeFile(DATA_FILE, JSON.stringify(sens, null, 4), () => {
      res.json({});
    });
  });
});

app.delete('/api/sentences', (req, res) => {
    
  fs.readFile(DATA_FILE, (err, data) => {
    let sens = JSON.parse(data);
  
    sens = sens.filter((senObj) => {
        return senObj.id !== req.body.id;
    })
        
    fs.writeFile(DATA_FILE, JSON.stringify(sens, null, 4), () => {
      res.json({});
    });
  });
});

app.listen(8001, () => console.log('Listening on port 8001!'));
