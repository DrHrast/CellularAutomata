import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TwoDService } from '../../services/two-d-service';

@Component({
  selector: 'app-two-dpage',
  imports: [CommonModule],
  templateUrl: './two-dpage.html',
  styleUrl: './two-dpage.css',
  standalone: true
})
export class TwoDPage {
  gridNumberColumns: number = 100; //Used with form and animation display
  gridNumberRows: number = 100;
  grid: number[][] = [];
  isPlaying: boolean = false;
  stepMs = 100;              // speed (ms per step)
  private timer: number | null = null;
  trackIndex = (i: number) => i;
  private isDrawing = false;
  private drawValue: 0 | 1 = 1;
  preventContext(e: MouseEvent) { e.preventDefault(); }

  constructor(private twoDService: TwoDService) {}

  ngOnInit() {
    this.grid = [];
    for(let i = 0; i < this.gridNumberRows; i++) {
      // let tempRow = [...Array.from({ length: this.gridNumberColumns }, () => Math.random() < 0.85 ? 0 : 1)];
      let tempRow = [...Array.from({ length: this.gridNumberColumns }, () => 0 )];
      this.grid.push(tempRow);
    }
  }

  ngOnDestroy() {
    this.Stop();
  }

  onClick() {
    let gridTemp = [...this.grid];
    this.grid = [];
    this.grid = this.twoDService.calculateNextLayer(gridTemp, this.gridNumberColumns, this.gridNumberRows);
  }

  Stop() {
    this.isPlaying = false;
    if (this.timer !== null) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  Play() {
    if(this.isPlaying) return;
    this.isPlaying = true;

    this.timer = window.setInterval(() => {
      this.onClick();
    }, this.stepMs);
    }

    changeState(i: number, j: number) {
      this.grid[i][j] = this.grid[i][j] ? 0 : 1;
    }

    startDraw(i: number, j: number, e: PointerEvent) {
    this.drawValue = (e.button === 2) ? 0 : 1;
    this.isDrawing = true;

    this.paintCell(i, j, this.drawValue);

    (e.target as Element).setPointerCapture?.(e.pointerId);
  }

  draw(i: number, j: number, _e: PointerEvent) {
    if (!this.isDrawing) return;
    this.paintCell(i, j, this.drawValue);
  }

  @HostListener('document:pointerup')
  endDraw() { this.isDrawing = false; }

  private paintCell(i: number, j: number, val: 0 | 1) {
    this.grid[i][j] = val;
  }
}
