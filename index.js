const fs = require('fs');
const StatMode = require('stat-mode');
const colors = require('colors');
fs.stat('./cat.jpg', (err, stats) => {
    let statMode = new StatMode(stats);
    console.log(statMode.toString())

});

fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Dane przed zapisem'.blue);
    console.log(data);
    const tekst = "jakis ciag znakow przypominający słowa";
    fs.appendFile('./text.txt', tekst, (err) => {
        if (err) throw err;
        console.log('Zapisano');
        fs.readFile('./text.txt', 'utf-8', (err, data) => {
            if (err) throw err;
            console.log('Dane przed zapisem'.blue);
            console.log(data);
        });
    });
});

fs.readdir('./', (err, files) => {
    if (err) throw err;
    fs.writeFile('./folder.txt', files, (err, files) => {
        if (err) throw err;
        fs.readFile('./folder.txt', 'utf-8', (err, data) => {
            if (err) throw err;
            console.log('Zawartość folderu:' + data.red);
        });
    });
});