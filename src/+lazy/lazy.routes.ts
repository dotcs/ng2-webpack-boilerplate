/* tslint:disable */
import { RouterModule, Route } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Route[] = 
  [ { path: '', pathMatch: 'full', component: MainComponent }
  // { path: '**', component: PageNotFoundComponent }
];

export default RouterModule.forChild(routes);
