type Boundary = 'periodic' | 'fixed0' | 'fixed1';
type Init = 'center' | 'random' | 'custom';

export interface OneDCAConfig {
used: any;
colorScheme: any;
  rule: number;        // 0..255
  cells: number;       // 8..4096
  steps: number;       // 1..4096 (generations)
  boundary: Boundary;  // boundary condition
  init: Init;          // initial condition
  custom?: string;     // custom bitstring when init === 'custom'
  cellSize: number;    // px per cell
  speed: number;       // ms per step (0 = instant)
}
