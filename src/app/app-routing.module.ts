import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponentComponent } from './data-component/data-component.component';
const routes: Routes = [
  {path:'',component:DataComponentComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
