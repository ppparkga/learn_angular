import { Component } from '@angular/core';
import {GreetingService} from "./greeting.service";

@Component({
  selector: 'app-root',
  template: `
    <button (click)="sayHi()">say Hi</button>
    <p>{{ greeting }}</p>
  `,
  providers: [GreetingService]
})
export class AppComponent {
  greeting : string = '';

  constructor(private greetingService : GreetingService){}

  sayHi() {
    this.greeting = this.greetingService.sayHi(); //service 사용
  }
}
