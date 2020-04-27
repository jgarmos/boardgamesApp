import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardgamesLibraryPageRoutingModule } from './boardgames-library-routing.module';

import { BoardgamesLibraryPage } from './boardgames-library.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardgamesLibraryPageRoutingModule
  ],
  declarations: [BoardgamesLibraryPage]
})
export class BoardgamesLibraryPageModule {}
