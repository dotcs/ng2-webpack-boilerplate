/* tslint:disable */
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoComponent } from './app/demo.component';

const routes: Route[] = 
  [ { path: '', pathMatch: 'full', redirectTo: 'demo' }
  , { path: 'demo', component: DemoComponent }
  , { path: 'lazy', loadChildren: () => new Promise(resolve => {
        (require as any).ensure([], (require: any) => {
          resolve(require('./+lazy/lazy.module').default);
        });
      })
    },
  // { path: '**', component: PageNotFoundComponent }
];

export default RouterModule.forRoot(routes);
