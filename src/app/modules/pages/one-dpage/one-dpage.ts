import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { OneDForm } from '../../components/one-d-form/one-d-form';
import { CommonModule } from '@angular/common';
import { OneDService } from '../../services/one-d-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-one-dpage',
  imports: [CommonModule, FormsModule],
  templateUrl: './one-dpage.html',
  styleUrl: './one-dpage.css',
  standalone: true
})
export class OneDPage {
  gridNOfColumns: number = 100;
  generations: number = 10;
  stepCount: number = 5;
  cellRow: number[] = [];
  initialRow: number[] = [];
  rows: number[][] = [];
  ruleDecimal = '30';
  rule32bitDecimal = '300';
  ruleBinary = '00011110';
  rule32bitBinary = '000100101100';
  isPlaying: boolean = false;
  stepMs = 100;
  private timer: number | null = null;
  useExpandedNeighborhood: boolean = false;

  constructor(private oneDService: OneDService) {}

  ngOnInit() {
    this.resetGrid();
    // this.cellRow = [...this.initialRow];
    // this.rows = [...this.rows, [...this.cellRow]];
  }

  initialize() {
    this.initialRow = Array.from({ length: this.gridNOfColumns }, () => 0);
    this.initialRow[Math.round(this.gridNOfColumns/2)] = 1;
  }

  onClick() {
    console.log(this.rule32bitBinary);
    for(let i = 0; i < this.stepCount; i++) {
      let nextRow = this.oneDService.calculateNext(
        this.cellRow,
        this.useExpandedNeighborhood ? this.rule32bitBinary : this.ruleBinary,
        this.useExpandedNeighborhood);
      this.rows = [...this.rows, [...nextRow]];
      this.cellRow = []; this.cellRow = nextRow;
      nextRow = [];
    }
  }

  resetGrid() {
    this.initialize();
    let tempInitalRow = this.initialRow;
    this.cellRow = [...tempInitalRow];
    this.rows = [[...tempInitalRow]];
  }

  onRun() {
    if (!this.isRuleValid) return;
  }

  get isRuleValid(): boolean {
    if (this.useExpandedNeighborhood) {
      return /^(?:0|[1-9]\d{0,9})$/.test(this.rule32bitDecimal.trim())
          && Number(this.rule32bitDecimal) <= 0xFFFFFFFF;
    }
    return /^(?:\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/.test(this.ruleDecimal.trim());
  }

  expandeNeighborhood($event: any) {
    this.useExpandedNeighborhood = !this.useExpandedNeighborhood;
    this.resetGrid();
    this.onRuleChange(this.useExpandedNeighborhood ? this.rule32bitDecimal : this.ruleDecimal);
  }

  onRuleChange(value: string) {
    const digits = value.replace(/\D/g, '');
    if(this.useExpandedNeighborhood) {
      const n = Math.min(0xFFFFFFFF, Math.max(0, parseInt(digits, 10) || 0));
      this.rule32bitBinary = n.toString(2).padStart(32, '0');
    } else {
      let n = Math.min(255, Math.max(0, parseInt(digits, 10) || 0));
      this.ruleBinary = n.toString(2).padStart(8, '0');
    }
    this.resetGrid();

  }

  onSpecsChange($event: any) {
    this.resetGrid();
    this.initialize();
  }

  randomizeSeed() {
    const n = this.cellRow.length;
    this.resetGrid();
    this.cellRow = [];
    this.cellRow = Array.from({ length: n }, () => Math.random() < 0.5 ? 0 : 1);
    this.rows = [[...this.cellRow]];
  }

  stop() {
    this.isPlaying = false;
    if (this.timer !== null) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  play() {
    if(this.isPlaying) {
      this.stop();
      return;
    }
    this.isPlaying = true;

    this.timer = window.setInterval(() => {
      this.onClick();
    }, this.stepMs);
  }
}
