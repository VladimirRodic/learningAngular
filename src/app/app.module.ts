import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';

const appRoutes: Routes = [
    { path: '', component: InputFieldComponent},
    { path: 'input_output', component: ParentComponentComponent},
    { path: 'service',
      children: [
          { path: '', component: FirstComponentComponent },
          { path: '', component: SecondComponentComponent, outlet: 'secondary' }
      ]
    }
];

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
