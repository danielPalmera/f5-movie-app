import { Component, signal } from '@angular/core';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavigationBar, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('f5-movie-app');
}
