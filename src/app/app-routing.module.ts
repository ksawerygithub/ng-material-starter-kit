import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChipComponent } from './components/chip/chip.component';
import { ChipFormComponent } from './components/chip-form/chip-form.component';
import { ChipComponentModule } from './components/chip/chip.component-module';
import { ChipServiceModule } from './services/chip.service-module';
import { ChipFormComponentModule } from './components/chip-form/chip-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'chip', component: ChipComponent }, { path: 'chipForm', component: ChipFormComponent }]), ChipComponentModule, ChipServiceModule, ChipFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
