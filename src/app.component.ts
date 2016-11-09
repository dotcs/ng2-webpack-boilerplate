import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp',
  templateUrl: './app.template.html',
  styleUrls: [ './app.styles.css' ]
})
export class AppComponent {
  protected message: string = 'Hello world!';
}
