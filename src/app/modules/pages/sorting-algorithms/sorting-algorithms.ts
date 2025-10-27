import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sorting-algorithms',
  imports: [CommonModule, FormsModule],
  templateUrl: './sorting-algorithms.html',
  styleUrl: './sorting-algorithms.css',
  standalone: true
})
export class SortingAlgorithms {
  public algorithms: Array<
  'Bubble sort' |
  'Selection sort' |
  'Quick sort' |
  'Merge sort' |
  'Insertion sort'
  > = [
    'Bubble sort',
    'Selection sort',
    'Quick sort',
    'Merge sort',
    'Insertion sort'
  ];
  public selectedAlgorithm:
  'Bubble sort' |
  'Selection sort' |
  'Quick sort' |
  'Merge sort' |
  'Insertion sort' = 'Bubble sort';
  numberColumns: number = 10;

  onClick() {
    throw new Error('Method not implemented.');
  }

  randomizeSeed() {
    throw new Error('Method not implemented.');
  }

  play() {
    throw new Error('Method not implemented.');
  }

  stop() {
    throw new Error('Method not implemented.');
  }

  reset() {
    throw new Error('Method not implemented.');
  }

  onSpecsChange($event: any) {
    this.reset();
  }
}
