import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = { email: '', password: '' };

  constructor(public alertCtrl: AlertController, public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  register() {
    this.auth.registerUser(this.user.email, this.user.password)
      .then((user) => {
        //el usuario se ha creado correctamente
        this.user.password = '';
        //cambiar alert por toast quizas??/
        this.alertCtrl.create({
          header: 'Nuevo Usuario',
          subHeader: 'El usuario se ha creado correctamente',
          buttons: ['Aceptar']
        }).then(alert => {
          alert.present();
        });
      }).catch(err => {
        this.alertCtrl.create({
          header: 'Error',
          subHeader: err.message,
          buttons: ['Aceptar']
        }).then(alert => {
          alert.present();
        });
      })
  }

  login() {
    this.auth.loginUser(this.user.email, this.user.password)
      .then(res => {
        this.router.navigate(['boardgames-library']);
      }, err => {
        console.log(err.message);
        this.alertCtrl.create({
          header: 'Error',
          subHeader: err.message,
          buttons: ['Aceptar']
        }).then(alert => {
          alert.present();
        });
      })
  }
}
