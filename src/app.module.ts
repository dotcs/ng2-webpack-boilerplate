import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import appRoutes from './app.routes';
import { AppComponent } from './app.component';
import { DemoComponent } from './app/demo.component';

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      appRoutes
    ],
    declarations: [
      AppComponent,
      DemoComponent
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
