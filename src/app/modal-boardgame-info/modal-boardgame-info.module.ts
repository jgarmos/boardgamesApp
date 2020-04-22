import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBoardgameInfoPageRoutingModule } from './modal-boardgame-info-routing.module';

import { ModalBoardgameInfoPage } from './modal-boardgame-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBoardgameInfoPageRoutingModule
  ],
  declarations: [ModalBoardgameInfoPage]
})
export class ModalBoardgameInfoPageModule {}
