import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBoardgameInfoPageRoutingModule } from './modal-boardgame-info-routing.module';

import { ModalBoardgameInfoPage } from './modal-boardgame-info.page';

import { IonicRatingModule } from 'ionic4-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    ModalBoardgameInfoPageRoutingModule
  ],
  declarations: [ModalBoardgameInfoPage]
})
export class ModalBoardgameInfoPageModule {}
