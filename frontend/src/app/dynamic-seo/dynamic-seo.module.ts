import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DynamicSeoPageRoutingModule } from './dynamic-seo-routing.module';

import { DynamicSeoPage } from './dynamic-seo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DynamicSeoPageRoutingModule
  ],
  declarations: [DynamicSeoPage]
})
export class DynamicSeoPageModule {}
