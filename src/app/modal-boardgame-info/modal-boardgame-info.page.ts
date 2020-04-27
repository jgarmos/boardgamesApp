import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Game } from './../boardgames-library/Boardgames';

@Component({
  selector: 'app-modal-boardgame-info',
  templateUrl: './modal-boardgame-info.page.html',
  styleUrls: ['./modal-boardgame-info.page.scss'],
})
export class ModalBoardgameInfoPage implements OnInit {

  boardgame:Game;

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
