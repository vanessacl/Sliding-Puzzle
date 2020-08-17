// Swaping the puzzle pieces
function swapPieces(cell1, cell2) {
	let newP1 = document.getElementById(cell1);
	let newP2 = document.getElementById(cell2);
	let tempP = newP1.className;

  newP1.className = newP2.className;
  newP2.className = tempP;
}

// Mix pieces for a new game
function mixPieces() {
	for (let row = 1; row <= 3; row++) { 
   for (let col = 1; col <= 3; col++) { 
			let row2 = Math.floor(Math.random() * 3 + 1); 
			let col2 = Math.floor(Math.random() * 3 + 1); 
			
			swapPieces("cell" + row + col, "cell" + row2 + col2);
  	} 
	} 
}

// Logic of the game
function clickPiece(row, col) {
  const cell = document.querySelector("#cell" + row + col);
	const pieceC = cell.className;
	
  if (pieceC != "p9") { 
		//If white piece is on the right
		if (col < 3) {
      if (document.querySelector("#cell" + row + (col + 1)).className == "p9") {
        swapPieces("cell" + row + col, "cell" + row + (col + 1));
        return;
			}
		}
		
    //If white piece is on the left
    if (col > 1) {
    	if (document.querySelector("#cell" + row + (col - 1)).className == "p9") {
        swapPieces("cell" + row + col, "cell" + row + (col - 1));
        return;
      }
		}
		
    //If white piece is above
    if (row > 1) {
      if (document.querySelector("#cell" + (row -1 ) + col).className == "p9") {
        swapPieces("cell" + row + col, "cell" + (row - 1) + col);
        return;
      }
		}
		
    //If white piece is below
    if (row < 3) {
      if (document.querySelector("#cell" + (row + 1) + col).className == "p9") {
        swapPieces("cell" + row + col, "cell" + (row +1 ) + col);
        return;
      }
    } 
	} else {
		return;
	}
}
