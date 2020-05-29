import { BoardgamesLibraryPage } from './boardgames-library/boardgames-library.page';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Libreria de Juegos',
      url: '/boardgames-library',
      icon: 'mail'
    },
    {
      title: 'Mis Juegos de Mesa',
      url: '/my-boardgames-collection',
      icon: 'paper-plane'
    },
    {
      title: 'Mis Partidas',
      url: '/my-games',
      icon: 'heart'
    },
    {
      title: 'Amigos',
      url: '/my-friends',
      icon: 'archive'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public afAuth: AuthService,
    private navCtrl: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }


  isLoggedIn() {
    return this.afAuth.isLoggedIn;
  }

  logout() {
    this.afAuth.logoutUser()
      .then(res => {
        console.log(res);
        // localStorage.removeItem('user');
        this.navCtrl.navigate(['login']);
      })
      .catch(error => {
        console.log(error);
      })
  }

}
