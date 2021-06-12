import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HatComponent } from './hat/hat.component';

const routes: Routes = [

  // Root URL, everything else above.
  { path: '', pathMatch: 'full', component: HatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
