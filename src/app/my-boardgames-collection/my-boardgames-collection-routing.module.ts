import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBoardgamesCollectionPage } from './my-boardgames-collection.page';

const routes: Routes = [
  {
    path: '',
    component: MyBoardgamesCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBoardgamesCollectionPageRoutingModule {}
