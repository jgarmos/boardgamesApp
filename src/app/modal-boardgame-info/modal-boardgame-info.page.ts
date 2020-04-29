import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Game } from './../boardgames-library/Boardgames';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-modal-boardgame-info',
  templateUrl: './modal-boardgame-info.page.html',
  styleUrls: ['./modal-boardgame-info.page.scss'],
})
export class ModalBoardgameInfoPage implements OnInit {

  boardgame: Game;
  options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };



  constructor(public modalCtrl: ModalController,
    private theInAppBrowser: InAppBrowser) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  public openBoardgamesRulesWithCordovaBrowser(){
    this.openWithCordovaBrowser(this.boardgame.rules_url)
  }
  public openWithSystemBrowser(url: string) {
    let target = "_system";
    this.theInAppBrowser.create(url, target, this.options);
  }
  public openWithInAppBrowser(url: string) {
    let target = "_blank";
    this.theInAppBrowser.create(url, target, this.options);
  }
  public openWithCordovaBrowser(url: string) {
    let target = "_self";
    this.theInAppBrowser.create(url, target, this.options);
  }



}
