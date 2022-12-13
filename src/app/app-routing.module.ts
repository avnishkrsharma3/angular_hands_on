import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { EditTempTemplateDrivenComponent } from './edit-temp-template-driven/edit-temp-template-driven.component';
const routes: Routes = [
  {path: 'employee', component: ViewEmpComponent},
  {path: 'edit', component: EditEmpComponent },
  {path: 'quantityIncrement', component: QuantityIncrementComponent },
  {path: 'quantitySelector', component:QuantitySelectorComponent},
  {path: 'editTemplate', component:EditTempTemplateDrivenComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
