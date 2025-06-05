const words = ['DIGITAL', 'TECHNOLOGY', 'VIRTUAL', 'SELF', 'WELLNESS', 'ONLINE', 'PRIVACY', 'IDENTITY', 'DATA', 'CYBER'];
const gridSize = 20; // Updated grid size to 20x20
const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''));

let selectedCells = [];
let foundWords = new Set();

function generateWordSearch() {
    words.forEach(word => {
        placeWordInGrid(word);
    });
    fillEmptySpaces();
    renderGrid();
    renderWordList();
}

function placeWordInGrid(word) {
    let placed = false;
    while (!placed) {
        const direction = Math.floor(Math.random() * 2); // 0: horizontal, 1: vertical
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);
        
        if (canPlaceWord(word, row, col, direction)) {
            for (let i = 0; i < word.length; i++) {
                if (direction === 0) grid[row][col + i] = word[i];
                else grid[row + i][col] = word[i];
            }
            placed = true;
        }
    }
}

function canPlaceWord(word, row, col, direction) {
    if (direction === 0 && col + word.length > gridSize) return false;
    if (direction === 1 && row + word.length > gridSize) return false;
    for (let i = 0; i < word.length; i++) {
        if (direction === 0 && grid[row][col + i] !== '') return false;
        if (direction === 1 && grid[row + i][col] !== '') return false;
    }
    return true;
}

function fillEmptySpaces() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (grid[row][col] === '') {
                grid[row][col] = letters[Math.floor(Math.random() * letters.length)];
            }
        }
    }
}

function renderGrid() {
    const wordSearchDiv = document.getElementById('word-search');
    wordSearchDiv.innerHTML = '';
    grid.forEach((row, rowIndex) => {
        row.forEach((letter, colIndex) => {
            const cell = document.createElement('div');
            cell.textContent = letter;
            cell.dataset.row = rowIndex;
            cell.dataset.col = colIndex;
            cell.addEventListener('click', () => selectCell(cell));
            wordSearchDiv.appendChild(cell);
        });
    });
}

function renderWordList() {
    const wordListUl = document.getElementById('words-to-find');
    wordListUl.innerHTML = '';
    words.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        wordListUl.appendChild(li);
    });
}

function selectCell(cell) {
    if (cell.classList.contains('found')) return;
    
    cell.classList.toggle('selected');
    const cellPos = { row: parseInt(cell.dataset.row), col: parseInt(cell.dataset.col) };

    const cellIndex = selectedCells.findIndex(pos => pos.row === cellPos.row && pos.col === cellPos.col);
    if (cellIndex !== -1) {
        selectedCells.splice(cellIndex, 1);
    } else {
        selectedCells.push(cellPos);
    }

    checkForWord();
}

function checkForWord() {
    const selectedWord = selectedCells.map(pos => grid[pos.row][pos.col]).join('');
    const reversedSelectedWord = selectedCells.map(pos => grid[pos.row][pos.col]).reverse().join('');

    if (words.includes(selectedWord) || words.includes(reversedSelectedWord)) {
        highlightFoundWord();
    }
}

function highlightFoundWord() {
    selectedCells.forEach(pos => {
        const cell = document.querySelector(`[data-row="${pos.row}"][data-col="${pos.col}"]`);
        cell.classList.add('found');
    });

    const word = selectedCells.map(pos => grid[pos.row][pos.col]).join('');
    foundWords.add(word);
    selectedCells = [];

    checkAllWordsFound();
}

function checkAllWordsFound() {
    if (foundWords.size === words.length) {
        alert('Congratulations! You found all the words!');
    }
}

generateWordSearch();
