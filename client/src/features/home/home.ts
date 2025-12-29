import { Component, signal } from '@angular/core';
import { single } from 'rxjs';
import { Register } from '../account/register/register';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected registerMode = signal<boolean>(false);

  showRegister () {
    this.registerMode.set(true);
  }

}
