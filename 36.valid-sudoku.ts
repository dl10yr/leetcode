/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
      
  for (let i = 0; i < 9; i++) {
    const nmap = new Map<string, number>()

    for (let j = 0; j < 9; j++) {
      const target = board[i][j]
      if (target === '.') {
        continue
      } else {
        const old = nmap.get(target)
        if (old !== undefined) {
          return false
        }
        nmap.set(target, 1)
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    const nmap = new Map<string, number>()
    for (let j = 0; j < 9; j++) {
      const target = board[j][i]
      if (target === '.') {
        continue
      } else {
        const old = nmap.get(target)
        if (old !== undefined) {
          return false
        }
        nmap.set(target, 1)
      }
    }
  }



  for (let i = 1; i < 8; i += 3) {
    for (let j = 1; j < 8; j += 3) {
      const nmap = new Map<string, number>()
      const targets = [
        board[i - 1][j - 1],
        board[i - 1][j],
        board[i - 1][j + 1],
        board[i][j - 1],
        board[i][j],
        board[i][j + 1],
        board[i + 1][j - 1],
        board[i + 1][j],
        board[i + 1][j + 1],
      ]
      for (const target of targets) {
        if (target === '.') {
          continue
        } else {
          const old = nmap.get(target)
          if (old !== undefined) {
            return false
          }
          nmap.set(target, 1)
        }
      }
    }
  }

  return true
};
// @lc code=end

