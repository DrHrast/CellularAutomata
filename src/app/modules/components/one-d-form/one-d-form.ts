import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OneDCAConfig } from '../../models/one-dca-config';
import { CellState } from '../../../core/models/cell-state';
import { ColorScheme } from '../../../core/models/color-scheme';
import { StatesColorsConfig } from '../../../core/models/states-colors-config';

@Component({
  selector: 'app-one-d-form',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, TitleCasePipe],
  templateUrl: './one-d-form.html',
  styleUrls: ['./one-d-form.css'],
})
export class OneDForm {
  @Output() run = new EventEmitter<OneDCAConfig>();
  @Output() reset = new EventEmitter<void>();

  cellState = CellState;
  readonly allStates = Object.values(CellState);
  readonly schemes = Object.values(ColorScheme)
  model: OneDCAConfig = this.defaultModel();
  // private defaultStateModel() {
  //   return {
  //     used: {
  //       [CellState.Alive]: true,
  //       [CellState.Dead]: true,
  //       [CellState.Maturing]: false,
  //       [CellState.Decomposing]: false,
  //     } as Record<CellState, boolean>,
  //     colorScheme: ColorScheme.Classic as ColorScheme,
  //   };
  // }
  private defaultModel(): OneDCAConfig {
    return {
      rule: 110,
      cells: 128,
      steps: 64,
      boundary: 'periodic',
      init: 'center',
      custom: '',
      cellSize: 4,
      speed: 0,
      used: undefined,
      colorScheme: undefined,
    };
  }

  onRun(): void {
    this.model.rule = this.clampInt(this.model.rule, 0, 255);
    this.model.cells = this.clampInt(this.model.cells, 8, 4096);
    this.model.steps = this.clampInt(this.model.steps, 1, 4096);
    this.model.cellSize = this.clampInt(this.model.cellSize ?? 4, 1, 32);
    this.model.speed = this.clampInt(this.model.speed ?? 0, 0, 2000);

    if (this.model.init === 'custom') {
      const s = (this.model.custom ?? '').trim();
      if (!/^[01]+$/.test(s)) {
        alert('Custom bitstring must contain only 0 and 1.');
        return;
      }
      this.model.custom = s;
    } else {
      this.model.custom = '';
    }

    this.run.emit({ ...this.model });
  }

  onReset(): void {
    this.model = this.defaultModel();
    this.reset.emit();
  }

  clampInt(v: number, min: number, max: number): number {
    const n = Math.round(Number.isFinite(v as number) ? v : min);

    return Math.min(max, Math.max(min, n));
  }

  get selectedStates(): CellState[] {
    return this.allStates.filter(s => this.model.used[s]);
  }
}
