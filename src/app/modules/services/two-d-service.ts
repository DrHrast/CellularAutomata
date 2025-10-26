import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwoDService {
  tempGrid: number[][] = [];
  finalGrid: number[][] = [];
  cellNeighbors: number[] = [];
  gridRow: number[] = [];
  n: number = 0; m: number = 0; //n = number of columns; m = number of rows

  calculateNextLayer(grid: number[][], n: number, m: number) {
    this.clearData();
    this.tempGrid = grid;
    this.n = n;
    this.m = m;
    this.countNeighbors();
    return this.finalGrid;
  }

  countNeighbors() {

    for(let i = 0; i < this.m; i++) {
      for(let j = 0; j < this.n; j++) {
        const UL = this.tempGrid  [(i - 1 + this.m) % this.m] [(j - 1 + this.n) % this.n];
        const U = this.tempGrid   [(i - 1 + this.m) % this.m] [j];
        const UR = this.tempGrid  [(i - 1 + this.m) % this.m] [(j + 1) % this.n];
        const L = this.tempGrid   [i]                         [(j - 1 + this.n) % this.n];
        const R = this.tempGrid   [i]                         [(j + 1) % this.n];
        const DL = this.tempGrid  [(i + 1) % this.m]          [(j - 1 + this.n) % this.n];
        const D = this.tempGrid   [(i + 1) % this.m]          [j];
        const DR = this.tempGrid  [(i + 1) % this.m]          [(j + 1) % this.n];
        //Test of accuarcy
        //console.log(`negbors of (${i}:${j}): ${UL} ${U} ${UR} ${L} ${R} ${DL} ${D} ${DR}`);

        this.cellNeighbors = [UL, U, UR, L, R, DL, D, DR];
        this.generateGridRow(i, j);
      }
      this.finalGrid.push(this.gridRow);
      this.gridRow = [];
    }
  }

  generateGridRow(i: number, j: number) {
    const countAliveNeighbors = this.cellNeighbors.filter(o => o === 1).length
    const currentCellState = this.tempGrid[i][j] | 0;

    let next: number;
    if(currentCellState === 1) {
      next = (countAliveNeighbors === 2 || countAliveNeighbors === 3) ? 1 : 0;
    } else {
      next = (countAliveNeighbors === 3) ? 1 : 0;
    }
    this.gridRow.push(next);
  }

  clearData() {
    this.finalGrid = [];
    this.tempGrid = [];
    this.cellNeighbors = [];
    this.gridRow = [];
  }
}
