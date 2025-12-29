import { Component, signal, input } from '@angular/core';
import { single } from 'rxjs';
import { Register } from '../account/register/register';
import { User } from '../../types/user';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  readonly membersFromApp = input.required<User[]>();
  protected registerMode = signal<boolean>(false);

  showRegister (value : boolean) {
    this.registerMode.set(value);
  }

}
