import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//I've added these imports
import { BoardgamesApiService } from './services/boardgames-api.service';
import { HttpClientModule } from '@angular/common/http'
import { ModalBoardgameInfoPageModule } from './modal-boardgame-info/modal-boardgame-info.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// Import ionic-rating module
import { IonicRatingModule } from 'ionic4-rating';
//Cordova imports
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ModalBoardgameInfoPageModule,
    IonicRatingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BoardgamesApiService,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
