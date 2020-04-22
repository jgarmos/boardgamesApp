import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardgamesLibraryPage } from './boardgames-library.page';

const routes: Routes = [
  {
    path: '',
    component: BoardgamesLibraryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardgamesLibraryPageRoutingModule {}
