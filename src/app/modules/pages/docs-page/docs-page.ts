import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-docs-page',
  imports: [RouterLinkActive, RouterLink, CommonModule, RouterOutlet],
  templateUrl: './docs-page.html',
  styleUrl: './docs-page.css',
  standalone: true
})
export class DocsPage {

}
