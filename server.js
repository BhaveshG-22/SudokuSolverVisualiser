const express = require('express');
const app = express();
const path = require('path');
const sudoku = require('sudoku');


app.listen(2014, () => {
    console.log('Server started on PORT 2014');
});

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
});

app.get('/script6.js', (req, res) => {
    const filePath = path.join(__dirname, 'script6.js');
    res.set('Content-Type', 'text/javascript');
    res.sendFile(filePath);

});

app.get('/style.css', (req, res) => {
    const filePath = path.join(__dirname, 'style.css');
    res.set('Content-Type', 'text/css');
    res.sendFile(filePath);
});

app.get('/generateSudoku', (req, res) => {
    console.log("here in generateSudoku");
    //Create full random 9x9 sudoku
    var puzzle = sudoku.makepuzzle();

    // Convert the puzzle to a 2D array
    const puzzle2D = [];
    for (let i = 0; i < 9; i++) {
        puzzle2D.push(puzzle.slice(i * 9, (i + 1) * 9).map((value) => value || 0));
    }

    console.log(puzzle2D);

    res.send(puzzle2D)
})
