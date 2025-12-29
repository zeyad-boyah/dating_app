import { Component, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected registerMode = signal<boolean>(false);

  showRegister () {
    this.registerMode.set(true);
  }

}
