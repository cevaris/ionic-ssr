import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicSeoPage } from './dynamic-seo.page';

const routes: Routes = [
  {
    path: ':id',
    component: DynamicSeoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicSeoPageRoutingModule {}
