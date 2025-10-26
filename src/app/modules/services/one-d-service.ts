import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneDService {
  tempRow: number[] = [];
  finalRow: number[] = [];
  rule: any;
  expandNeighborhood: boolean = false;

  calculateNext(row: number[], rule: string, expandNeighborhood: boolean) {
    this.rule = rule.split('');
    this.tempRow = row;
    this.finalRow = [];
    this.checkNeighbourhood(expandNeighborhood);
    this.tempRow = [];
    return this.finalRow;
  }

  //Rules of neighbourhood
  checkNeighbourhood(expandN: boolean): void {
    const n = this.tempRow.length;
    let LL = 0;
    let RR = 0;

    for(let i = 0; i < n; i++) {
      const L = this.tempRow[(i - 1 + n) % n];
      const C = this.tempRow[i];
      const R = this.tempRow[(i + 1) % n];

      if(expandN) {
        LL = this.tempRow[(i - 2 + n) % n];
        RR = this.tempRow[(i + 2) % n];
        console.log('LL ' + LL);
        console.log('RR ' + RR);
      }

      const neighbourhood = !expandN ? (L << 2) | (C << 1) | R : (LL << 4) | (L << 3) | (C << 2) | (R << 1) | RR;
      console.log('susjednost: ' + neighbourhood);
      const out = !expandN ? this.rule[7 - neighbourhood] : this.rule[31 - neighbourhood];
      console.log('rule 8: ' + this.rule[7 - neighbourhood]);
      console.log('rule 32: ' + this.rule[31 - neighbourhood]);

      this.finalRow.push(Number(out ?? 0));
      console.log('finalrow push: ' + this.finalRow);
    }
  }
}
