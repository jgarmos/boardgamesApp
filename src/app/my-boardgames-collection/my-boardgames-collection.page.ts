import { Component, OnInit } from '@angular/core';
import { Boardgames, Game } from './../boardgames-library/Boardgames';
import { AlertController, ToastController, IonSegment } from '@ionic/angular';
import { CarrouselOptions } from './carrousel-options';

@Component({
  selector: 'app-my-boardgames-collection',
  templateUrl: './my-boardgames-collection.page.html',
  styleUrls: ['./my-boardgames-collection.page.scss'],
})
export class MyBoardgamesCollectionPage implements OnInit {

  myBoardgamesList: Boardgames;
  carrousel_options: CarrouselOptions;
  isSimpleList: boolean;

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
  ) {
    this.myBoardgamesList = new Boardgames();
    this.carrousel_options = new CarrouselOptions();
    this.isSimpleList = true;
  }

  ngOnInit() {

    this.readBoardgamesFromLocalStorage();
  }

  readBoardgamesFromLocalStorage() {
    this.myBoardgamesList = JSON.parse(window.localStorage.getItem("boardgames"));
  }

  //TODO: needs some refactoring
  async deleteFromLocalStorage(boardgame: Game) {
    const alert = await this.alertCtrl.create({
      header: 'Borrar',
      message: 'Estas seguro de que quieres borrar ' + boardgame.name + ' de "Mis Juegos"?',
      buttons: [
        {
          text: 'Mejor No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
          }
        }, {
          text: 'Si',
          handler: async () => {
            const toast = await this.toastCtrl.create({
              message: 'Juego borrado de "Mis Juegos de mesa"',
              duration: 2500,
              animated: true,
              color: "success",
              position: "top"
            });
            debugger;
            let index = this.myBoardgamesList.games.indexOf(boardgame);
            this.myBoardgamesList.games.splice(index, 1);
            window.localStorage.setItem("boardgames", JSON.stringify(this.myBoardgamesList));
            toast.present();
          }
        }
      ]
    });
    await alert.present();
  }

  changeView(evento) {
    console.log('Segment changed', evento.target);
    let is:IonSegment  = <IonSegment> evento.target;
    console.log (is.value);
    this.carrousel_options.setAnimacion(is.value);
    if (is.value === 'list'){
      this.isSimpleList = true;
    }else{
      this.isSimpleList = false;
    }
  }
}
