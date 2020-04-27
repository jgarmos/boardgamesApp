import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBoardgameInfoPage } from './modal-boardgame-info.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBoardgameInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBoardgameInfoPageRoutingModule {}
