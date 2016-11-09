import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import routes from './lazy.routes';
import { MainComponent } from './main.component';

@NgModule({
    imports: [
      CommonModule,
      routes
    ],
    declarations: [
      MainComponent
    ],
    providers: []
})
export default class LazyModule {
}
