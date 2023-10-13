function doFunc(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    let longestPath = 0; 
  
    function isValid(row, col, prevValue) {
      return (
        row >= 0 &&
        row < m &&
        col >= 0 &&
        col < n &&
        !visited[row][col] &&
        matrix[row][col] < prevValue
      );
    }
  
    function dfs(row, col, currentLength) {
      visited[row][col] = true;
      currentLength++;
  
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        if (isValid(newRow, newCol, matrix[row][col])) {
          dfs(newRow, newCol, currentLength);
        }
      }
  
      if (currentLength > longestPath) {
        longestPath = currentLength;
      }
  
      visited[row][col] = false; 
    }
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        dfs(i, j, 0);
      }
    }
  
    return longestPath;
  }
  
// inputArray = ["3 3","4 3 5","3 2 6",'0 1 1']
// inputArray = ["3 3","9 6 4","5 6 7",'2 1 1']
// inputArray = ["1 1","2"]
const arr = inputArray.map((arr)=>arr.split(" "))
arr.shift();
const matrix = arr.map((a)=>a.map((b)=>parseInt(b)))
const result = doFunc(matrix);
console.log(result)



