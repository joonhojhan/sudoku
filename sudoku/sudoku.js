let puzzle = 
[[ 8,9,5,   7,4,2,   1,3,6 ],
[ 2,7,1,   9,6,3,   4,8,5 ],
[ 4,6,3,   5,8,1,   7,9,2 ],

[ 9,3,4,   6,1,7,   2,5,8 ],
[ 5,1,7,   2,3,8,   9,6,4 ],
[ 6,8,2,   4,5,9,   3,7,1 ],

[ 1,5,9,   8,7,4,   6,2,3 ],
[ 7,4,6,   3,2,5,   8,1,9 ],
[ 3,2,8,   1,9,6,   5,4,7 ]];

function getRow(puzzle, row) {
    return puzzle[row];
}

function getColumn(puzzle, col) {
    let colArray = [];
    for (let i = 0; i < puzzle.length; i++) {
        colArray.push(puzzle[i][col]);
    }
    return colArray;
}

function getGrid(puzzle, row, col) {
    let gridArray = [];
    let startRow = row * 3;
    let startCol = col * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            gridArray.push(puzzle[j][i]);
        }
    }
    return gridArray;
}

function includes1to9(subSection) {
    for (let i = 0; i < subSection.length; i++) {
        if (subSection.indexOf(i + 1) === -1)
            return false;
    }
    return true;
}

function sudokuIsValid(puzzle) {
    let checkArray = [];
    for (let i = 0; i < 9; i++) {
        checkArray.push(getRow(puzzle, i));
        checkArray.push(getColumn(puzzle, i));
        }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            checkArray.push(getGrid(puzzle, i, j))
        }
    }
    for (let i = 0; i < checkArray.length; i++) {
        if (includes1to9(checkArray[i]) === false)
            return false;
    }
    return true;
}

function isSame(puzzle1, puzzle2) {
    for (let i = 0; i < puzzle1.length; i++) {
        for (let j = 0; j < puzzle1[i].length; j++) {
            if (puzzle1[i][j] !== puzzle2[i][j])
                return false;
        }
    }
    return true;
}

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let puzzleCopy = 
[[ 8,9,5,   7,4,2,   1,3,6 ],
[ 2,7,1,   9,6,3,   4,8,5 ],
[ 4,6,3,   5,8,1,   7,9,2 ],

[ 9,3,4,   6,1,7,   2,5,8 ],
[ 5,1,7,   2,3,8,   9,6,4 ],
[ 6,8,2,   4,5,9,   3,7,1 ],

[ 1,5,9,   8,7,4,   6,2,3 ],
[ 7,4,6,   3,2,5,   8,1,9 ],
[ 3,2,8,   1,9,6,   5,4,7 ]];

let p8zzleCopy = 
[[ 8,9,5,7,4,2,1,3,6 ],
[ 8,7,1,9,6,3,4,8,5 ],
[ 4,6,3,5,8,1,7,9,2 ],
[ 9,3,4,6,1,7,2,5,8 ],
[ 5,1,7,2,3,8,9,6,4 ],
[ 6,8,2,4,5,9,3,7,1 ],
[ 1,5,9,8,7,4,6,2,3 ],
[ 7,4,6,3,2,5,8,1,9 ],
[ 3,2,8,1,9,6,5,4,7 ]];


//Tests
console.log(sudokuIsValid(p8zzle));
// => false
console.log(sudokuIsValid(puzzle));
// => true
console.log(isSame(puzzle, puzzleCopy));
// => true
console.log(isSame(puzzle, p8zzle));
// => false
console.log(isSame(p8zzle, puzzle));
// => false
console.log(isSame(p8zzleCopy, p8zzle));
// => true