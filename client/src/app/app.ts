import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  private http = inject(HttpClient);
  protected readonly title = 'zeyad';
  
  
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/members').subscribe({
      next: response => console.log(response),
      error: error =>console.log(error),
      complete: ()=> console.log("api request complete") 
  })
  }
}
