import { Component, OnInit } from '@angular/core';
import { Boardgames } from './Boardgames';
import { BoardgamesApiService } from './../services/boardgames-api.service';
import { HttpResponse } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalBoardgameInfoPage } from './../modal-boardgame-info/modal-boardgame-info.page';


@Component({
  selector: 'app-boardgames-library',
  templateUrl: './boardgames-library.page.html',
  styleUrls: ['./boardgames-library.page.scss'],
})
export class BoardgamesLibraryPage implements OnInit {

  boardgamesList: Boardgames;
  numberOfGames: number;

  constructor(private boargamesAPI: BoardgamesApiService, private modalCtrl:ModalController) {
    this.boardgamesList = new Boardgames();
    this.numberOfGames = 0;
  }

  ngOnInit() {
    this.loadBoardgames();
  }

  loadBoardgames() {
    this.boargamesAPI.getBoardgames(this.numberOfGames).subscribe(
      resp_ok => {
        let httpResponse: HttpResponse<Boardgames> = resp_ok as HttpResponse<Boardgames>;
        let boardgames = httpResponse.body;
        this.boardgamesList.games.push(...boardgames.games);
        console.log("llamando a Api exitosamente");
        this.boardgamesList.games.map(game => console.log (game.name));
      }, resp_ko => {
        console.log("Error al recuperar la lista de películas");
      }
    )
  }
  showBoardgameInfo(boardgame){
    this.modalCtrl.create({
      component: ModalBoardgameInfoPage,
      componentProps: { boardgame },

    }).then((modal) =>{
      modal.onDidDismiss().then(() =>{
        //se ejecuta al cerrar
      });
      modal.present();
    });
  }

}

