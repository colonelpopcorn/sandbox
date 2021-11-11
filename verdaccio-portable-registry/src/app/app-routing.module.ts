import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from 'my-calculator';

const routes: Routes = [{path: 'calculator', component: MyCalculatorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
