import { Component } from '@angular/core';
import { testCreateSafe } from './infra/KeyCell';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shlomo6-keys';
  constructor(){
    debugger;
    testCreateSafe();
  }
}
