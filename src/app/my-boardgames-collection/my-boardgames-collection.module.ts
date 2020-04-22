import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyBoardgamesCollectionPageRoutingModule } from './my-boardgames-collection-routing.module';

import { MyBoardgamesCollectionPage } from './my-boardgames-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBoardgamesCollectionPageRoutingModule
  ],
  declarations: [MyBoardgamesCollectionPage]
})
export class MyBoardgamesCollectionPageModule {}
