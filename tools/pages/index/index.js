Page({
  data: {
    cells: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: "X",
    winner: "",
    gameEnded: false,
  },

  handleCellClick(e) {
    if (this.data.gameEnded) {
      return;
    }

    const {
      index
    } = e.currentTarget.dataset;
    if (!this.data.cells[index] && !this.data.winner) {
      const cells = this.data.cells.slice(); // 正确获取 cells 变量
      cells[index] = this.data.currentPlayer;

      this.setData({
        cells,
        currentPlayer: this.data.currentPlayer === "X" ? "O" : "X",
      });

      this.checkWinner(cells, index);
    }

    if (!this.data.cells.includes("")) {
      this.setData({
        gameEnded: true
      });
    }
  },


  checkWinner(cells, index) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        this.setData({
          winner: cells[a]
        });
        this.setData({
          gameEnded: true
        });
        return;
      }
    }
  },

  restartGame() {
    this.setData({
      cells: ["", "", "", "", "", "", "", "", ""],
      currentPlayer: "X",
      winner: "",
      gameEnded: false,
    });
  },
});