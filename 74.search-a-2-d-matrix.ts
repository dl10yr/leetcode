function getPosition(value: number, totalColumn: number) {
  const targetRow = Math.floor(value / totalColumn)
  const targetColumn = value % totalColumn
  return [targetRow, targetColumn]
}

function searchMatrix(matrix: number[][], target: number): boolean {
  const row = matrix.length
  const column = matrix[0].length


  let left = 0
  let right = row * column - 1

  while(left <= right) {
      const middle = Math.floor((left + right) / 2)
      const [targetRow, targetColumn] = getPosition(middle, column)
      const targetValue = matrix[targetRow][targetColumn]

      if (targetValue === target) {
          return true
      } else if (targetValue > target) {
          right = middle - 1
      } else {
          left = middle + 1
      }
  }

  return false
};